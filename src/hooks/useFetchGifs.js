import { useEffect, useState } from "react";
import getGifs from "../api/getGifs";

const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getGifs(categoria).then(setImages);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return { images, loading };
};

export default useFetchGifs;
