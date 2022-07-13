import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (lon, lat) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}8&units=metric&exclude=minutely,hourly&appid=d18906f9e6d1c0f1366f2e3d5af38564`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [lon, lat]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
