
import { useState } from 'react';

import { fetchImages, Image } from '../utils/api'; 

interface SearchHistoryItem {
  term: string;
  images?: Image[]; 
}

export const useHistoryData = () => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]); 
  

  const addSearchTerm = async (term: string) => {
    
    const images = await fetchImages(term);
    const newItem: SearchHistoryItem = { term, images };
    setHistory((prevHistory) => [...prevHistory, newItem]);
  };

  const getImagesByTerm = (term: string): Image[] | undefined => {
    const historyItem = history.find((item) => item.term === term);
    return historyItem?.images;
  };

  return { history, addSearchTerm, getImagesByTerm };
};

