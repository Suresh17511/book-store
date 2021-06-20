import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoutes from './routes/books.js';

const app = express();

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/books', bookRoutes);

const CONNECTION_URL =
  'mongodb+srv://book_store:ROA0LRPP1hWY6ZNx@cluster0.69m22.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
