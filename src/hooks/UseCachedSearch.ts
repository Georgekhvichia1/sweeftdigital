
import { useState, useEffect } from 'react';
import { fetchImages } from '../utils/api';  

interface Image {
  id: string;
  url: string;
}

export const useCachedSearch = (searchTerm: string): Image[] => {
  const [images, setImages] = useState<Image[]>([]);
  const cache: { [key: string]: Image[] } = {};

  useEffect(() => {
    if (cache[searchTerm]) {
      setImages(cache[searchTerm]);
    } else {
      fetchImages(searchTerm).then((fetchedImages: Image[]) => {
        cache[searchTerm] = fetchedImages;
        setImages(fetchedImages);
      });
    }
  }, [searchTerm]);

  return images;
};
