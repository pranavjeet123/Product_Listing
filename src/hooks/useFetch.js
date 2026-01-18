import React from "react";
import { useState, useEffect } from "react";

export default UseFetch = (url, method) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      let response = await fetch(url, { method: method || "GET" });
      if (!response.ok) {
        setState({
          data: null,
          loading: false,
          error: "Error fetching data",
        });
        return;
      }
      let data = await response.json();

      setState({
        data,
        loading: false,
        error: null,
      });
    })();
  }, [url, method]);

  return state;
};
