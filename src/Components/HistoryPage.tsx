import React, { useState } from 'react';
import { useHistoryData } from '../hooks/UseHistoryData'; 
import { useCachedSearch } from '../hooks/UseCachedSearch';
import InfiniteScrollComponent from '../Components/InfiniteScroll'; 

const HistoryPage: React.FC = () => {
  const { history, getImagesByTerm } = useHistoryData();

  const handleTermClick = async (term: string) => {
    const images = await getImagesByTerm(term);
    
  };

  return (
    <div>
      <ul>
        {history.map((item, index) => (
          <li key={index} onClick={() => handleTermClick(item.term)}>
            {item.term}
          </li>
        ))}
      </ul>
      
    </div>
  );
};


export default HistoryPage;



