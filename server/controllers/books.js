import express from 'express';
import mongoose from 'mongoose';

import BooksModel from '../models/BooksModel.js';

const router = express.Router();

//route for getting all books from database

export const getBooks = async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

//getting specific book from database
export const getBook = async (req, res) => {
  const {id} = req.params;

  try {
    const book = await BooksModel.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

//getting books by search
export const getBooksBySearch = async (req, res) => {
  const {searchQuery} = req.query;

  try {
    const title = new RegExp(searchQuery, 'i');

    const books = await BooksModel.find({
      $or: [{title}],
    });
    res.json(books);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

//creating new book inserting into database
export const createBook = async (req, res) => {
  const book = req.body;

  const newBook = new BooksModel(book);

  try {
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

//update the book information
export const updateBook = async (req, res) => {
  const {id} = req.params;
  const {genre, title, description, imageLink, authors} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Book with id: ${id}`);

  const updatedBook = {genre, title, description, imageLink, authors, _id: id};

  await BooksModel.findByIdAndUpdate(id, updatedBook, {new: true});

  res.json(updatedBook);
};

//delete the book from database
export const deleteBook = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Book with id: ${id}`);

  await BooksModel.findByIdAndRemove(id);

  res.json({message: 'Book deleted successfully.'});
};
export default router;
