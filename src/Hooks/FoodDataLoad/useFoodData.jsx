import { useEffect, useState } from "react";

const useFoodData = (url) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [url]);
  return [foods, setFoods];
};

export default useFoodData;
