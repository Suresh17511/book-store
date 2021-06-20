import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  genre: String,
  title: String,
  description: String,
  imageLink: String,
  authors: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var BooksModel = mongoose.model('BooksModel', bookSchema);

export default BooksModel;
