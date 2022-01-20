import React from "react";

export default function <T>(url: string, init: T) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<T>(init);
  const [immediate, setImmediate] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;
    if (immediate) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (isMounted) {
            setData(data);
            setImmediate(false);
            setIsLoading(false);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [url, immediate]);

  return { data, isLoading, reFetch: () => setImmediate(true) };
}
