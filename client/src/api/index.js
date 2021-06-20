import axios from 'axios';

const url = 'http://localhost:5000/books';

export const fetchBooks = () => axios.get(url);
export const fetchBooksBySearch = (searchQuery) =>
  axios.get(`/books/search?searchQuery=${searchQuery.search || 'none'}`);
