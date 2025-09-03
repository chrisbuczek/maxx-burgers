import { type AxiosPromise } from "axios";
import { useEffect, useState } from "react";

export const useQuery = <T = unknown>(fn: () => AxiosPromise<T>) => {
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

  useEffect(() => {
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
      })
      .finally(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
      });
  }, [fn]);

  return state;
};
