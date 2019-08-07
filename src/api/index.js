import { API } from '../constants'; 

const fetchImages = async page => {
  const response = await fetch(`${API.URL}${API.KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  
  if (response.status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export {
  fetchImages,
};
