import express from 'express';

import {
  getBooks,
  getBook,
  getBooksBySearch,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/books.js';

const router = express.Router();

router.get('/search', getBooksBySearch);
router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
