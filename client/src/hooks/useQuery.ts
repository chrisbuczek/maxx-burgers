import { type AxiosPromise } from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface QueryConfig<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

const defaultConfig: QueryConfig<unknown> = {
  onSuccess: () => {},
  onError: () => {},
};

export const useQuery = <T = unknown>(
  fn: () => AxiosPromise<T>,
  config: QueryConfig<T> = defaultConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<
    "success" | "pending" | "error" | "settled" | null
  >(null);
  const [error, setError] = useState<Error | null>(null);

  const { onSuccess, onError } = config;
  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);

  // Using refs allows changing onSuccess/onError without changing runQuery and triggering useEffect in an infinite loop
  onSuccessRef.current = onSuccess;
  onErrorRef.current = onError;

  const isPending = useMemo(() => status === "pending", [status]);
  const isSuccess = useMemo(() => status === "success", [status]);
  const isError = useMemo(() => status === "error", [status]);

  const runQuery = useCallback(() => {
    if (!fn) return;
    setStatus("pending");
    fn()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setStatus("success");
        // Can't use direct function call like onSuccess() here, because it gets re-created after every re-render
        onSuccessRef.current?.(response.data);
      })
      .catch((err) => {
        setStatus("error");
        setError(err || "Failed to fetch");
        onErrorRef.current?.(err);
      });
  }, [fn]);

  useEffect(runQuery, [fn, runQuery]);

  return {
    data,
    status,
    isPending,
    isSuccess,
    isError,
    error,
    refetch: runQuery,
  };
};
