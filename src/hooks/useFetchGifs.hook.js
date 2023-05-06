import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Que es un Hook: es una funció que retorna algo
const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
