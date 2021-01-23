import { useEffect } from "react";

export function useScript(url, props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    props.forEach((prop) => script[prop.key] = prop.value);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};