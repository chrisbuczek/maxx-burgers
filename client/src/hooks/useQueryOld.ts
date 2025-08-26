import { useState, useEffect } from "react";
const apiBaseUrl = import.meta.env.VITE_API_URL;

export const useQuery = ({ route }: { route: string }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiBaseUrl + route, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Error: " + response);
        }
        const data = await response.json();
        setData((prev) => [...prev, ...data.results]);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [route]);

  return { data, loading, error };
};
