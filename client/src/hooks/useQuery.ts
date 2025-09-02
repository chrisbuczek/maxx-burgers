import axios from "axios";
import { useEffect, useState } from "react";

export const useQuery = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: "",
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, isLoading: true }));
    axios
      .get("http://localhost:8080")
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
  }, []);

  return state;
};
