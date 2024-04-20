const API_KEY = '43487203-09c4de35c13c8e4f76d56d253'
const URL = 'https://pixabay.com/api/'

export default function getImagesFromApi(text = '') {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}