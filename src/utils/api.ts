export interface Image {
    id: string;
    url: string;
  }
  
  const API_KEY = 'ECqGFOKUpzlZK9LIk8WpcyAXmRWM10Wmu5cGhiTymGk';
  const BASE_URL = 'https://api.unsplash.com';
  
  export const fetchImages = async (searchTerm?: string): Promise<Image[]> => {
    const response = await fetch(`${BASE_URL}/search/photos?query=${searchTerm || 'popular'}&client_id=${API_KEY}&per_page=20`);
    const data = await response.json();
    return data.results.map((item: any) => ({ id: item.id, url: item.urls.regular }));
  };
  