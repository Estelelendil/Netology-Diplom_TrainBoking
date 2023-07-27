import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";

export default function useJsonFetch(url, searchParams) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // debugger;
    if (url != null) {
      if (searchParams) {
        const newUrl = url + "?" + new URLSearchParams(searchParams).toString();
        fetch(newUrl)
          .then((response) => {
            setLoading(false);
            console.log("response", response);

            if (response.status !== 200) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then((answer) => setData(answer))
          .catch((err) => setError(err));
      } else {
        fetch(url)
          .then((response) => {
            setLoading(false);
            console.log("response", response);

            if (response.status !== 200) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then((answer) => setData(answer))
          .catch((err) => setError(err));
      }
    }
  }, [searchParams, url]);
  return [data, loading, error];
}

export function useLazyJsonFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const callback = useCallback((url, searchParams, seatsid) => {
    console.log("searchParams", searchParams);
    if (url != null) {
      if (searchParams) {
        const newUrl = seatsid
          ? url + "/" + seatsid + "/seats?" + new URLSearchParams(searchParams).toString()
          : url + "?" + new URLSearchParams(searchParams).toString();
        fetch(newUrl)
          .then((response) => {
            setLoading(false);
            console.log("response", response);

            if (response.status !== 200) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then((answer) => setData(answer))
          .catch((err) => setError(err));
      }
    } else {
      fetch({ url, searchParams })
        .then((response) => {
          setLoading(false);
          console.log("response", response);

          if (response.status !== 200) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((answer) => setData(answer))
        .catch((err) => setError(err));
    }
  }, []);

  return [data, loading, error, callback];
}

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
