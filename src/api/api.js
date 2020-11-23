const CORS_URL =`https://cors-anywhere.herokuapp.com/`;
const API_URL = `https://jsonkeeper.com/b/Y31M`;

const request = (url = '') => fetch(CORS_URL + `${API_URL}${url}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });

export const getUsers = () => request();
