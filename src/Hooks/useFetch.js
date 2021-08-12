import React from "react";

const useFetch = (url, options) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData(url, options) {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError("Um erro ocorreu!");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url, options);
  }, [url, options]);

  return { data, error, loading };
};

export default useFetch;
