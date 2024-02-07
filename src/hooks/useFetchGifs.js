import { useEffect, useState } from "react";

export const useFetchGifs = (category) => {
  const [fetchData, setFetchData] = useState([]);
  const apiKey = "MOhpHyxLZ9clBj6DTC5uEzGV28eJImJs";
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    )
      .then((res) => res.json())
      .then(({ data }) => setFetchData(data));
  }, [category]);

  return fetchData;
};
