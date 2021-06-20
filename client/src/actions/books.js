import {FETCH_ALL, FETCH_BY_SEARCH} from '../constants/actionTypes';

import * as api from '../api/index.js';

// get posts from the API

export const getBooks = () => async (dispatch) => {
  try {
    const {data} = await api.fetchBooks();
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

//getting posts by search

export const getBooksBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {data} = await api.fetchBooksBySearch(searchQuery);
    dispatch({type: FETCH_BY_SEARCH, payload: data});
  } catch (error) {
    console.log(error);
  }
};
