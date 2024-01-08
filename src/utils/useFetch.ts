import { useCallback, useEffect, useState } from "react";

//
// NOT USED ANYMORE: I started with this but found instances where I needed outsie React context. Besides Storage solution makes it more performant
//
const useFetch = <T>(url: string, options: RequestInit) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchResult, setFetchResult] = useState<T | null>(null);

  const performFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const res = await response.json();
      setFetchResult(res);
    } catch (error) {
      console.error("Error while performing fetch");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return { isLoading, fetchResult };
};

export default useFetch;
