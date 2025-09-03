import { type AxiosPromise } from "axios";
import { useCallback, useEffect, useState } from "react";

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
  const { onSuccess, onError } = config;
  const [state, setState] = useState<{
    data: T | null;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string;
  }>({
    data: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: "",
  });

  const runQuery = useCallback(() => {
    if (!fn) return;
    setState((prev) => ({ ...prev, isLoading: true }));
    fn()
      .then((response) => {
        setState((prev) => ({
          ...prev,
          data: response.data,
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: "",
        }));
        onSuccess?.(response.data);
      })
      .catch((err) => {
        setState((prev) => ({
          ...prev,
          data: null,
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: err.message || "Failed to fetch",
        }));
        onError?.(err);
      })
      .finally(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
      });
  }, [fn, onSuccess, onError]);

  useEffect(() => {
    runQuery();
  }, [fn, runQuery]);

  return { ...state, refetch: runQuery };
};
