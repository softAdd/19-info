import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const useFetch = (options: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      console.log(options)
      setIsLoading(true);

      try {
        const res = await axios({
          ...options
        });

        setResponse(res);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [options]);

  return {
    response,
    error,
    isLoading
  }
}

export default useFetch;