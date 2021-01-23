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

export function randomFromRange(min, max, decimals = 0) {
  let _decimals = Math.pow(10, decimals)
  let _min = min * _decimals;
  let _max = max * _decimals;
  let _range = _max - _min + 1;
  let random = Math.floor(Math.random() * _range + _min) / _decimals;
  return random;
}

export function createArrayWithRandomValues(length, min, max) {
  return Array.from({ length: length }, (v) =>
    randomFromRange(min, max)
  );
}