import axios from 'axios';

const url = 'https://my-book-store-application.herokuapp.com/books';

export const fetchBooks = () => axios.get(url);
export const fetchBooksBySearch = (searchQuery) =>
  axios.get(`${url}/search?searchQuery=${searchQuery.search || 'none'}`);
