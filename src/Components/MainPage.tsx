
import React, { useState } from 'react';
import InfiniteScrollComponent from '../Components/InfiniteScroll';
import { useCachedSearch } from '../hooks/UseCachedSearch';
import { useHistoryData } from '../hooks/UseHistoryData';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const images = useCachedSearch(searchTerm);
  const {addSearchTerm} = useHistoryData();
  addSearchTerm(searchTerm);
  
  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InfiniteScrollComponent data={images} />
    </div>
  );
};

export default MainPage;
