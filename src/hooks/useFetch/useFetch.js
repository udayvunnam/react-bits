import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  return { loading, error, response };
};
