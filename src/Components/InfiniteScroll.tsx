import React, { useState } from 'react';

interface Image {
  id: string;
  url: string;
}

interface InfiniteScrollProps {
  data: Image[];
}

const InfiniteScrollComponent: React.FC<InfiniteScrollProps> = ({ data }) => {
  return (
    <div className="image-gallery">
      {data.map((image, index) => (
        <div key={image.id} className="image-card"> 
          <a href={image.url} download target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Image ${index + 1}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollComponent;
