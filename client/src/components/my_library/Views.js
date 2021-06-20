import React from 'react';
import {CircularProgress} from '@material-ui/core';
import moment from 'moment';
import Modal from './Modal';
import ButtonBase from '@material-ui/core/ButtonBase';

const Views = (props) => {
  const {
    books,
    listDisplay,
    isOpen,
    setIsOpen,
    bookData,
    setBookData,
    gridDisplay,
    darkMode,
  } = props;
  const min = 30;
  const max = 100;

  return (
    <div
      className="views"
      style={{
        backgroundColor: `${darkMode.background}`,
        color: `${darkMode.color}`,
      }}
    >
      {!books.length ? (
        <CircularProgress className="cir_prog" />
      ) : (
        <>
          <div className="container" style={{display: `${listDisplay}`}}>
            <div className="books_block">
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                bookData={bookData}
              />

              {books.map((book) => (
                <div className="img__container" key={book.title}>
                  <ButtonBase
                    onClick={() => {
                      setIsOpen(true);
                      setBookData({
                        imageUrl: book.imageLink,
                        bookName: book.title,
                        author: book.authors,
                        description: book.description,
                      });
                    }}
                  >
                    <img src={book.imageLink} alt="gandhi autobiography" />
                    <div className="book_genre">{book.genre}</div>
                  </ButtonBase>
                </div>
              ))}
            </div>
          </div>
          <div className="list_container" style={{display: `${gridDisplay}`}}>
            <table>
              <tbody>
                <tr className="library_header">
                  <th className="book_details">Book Title & Authors</th>
                  <th>Genre</th>
                  <th>Reading Progress</th>
                  <th>
                    Last Opened
                    <span>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </th>
                </tr>
                {books.map((book) => (
                  <tr key={book.imageLink}>
                    <td className="book__details">
                      <img src={book.imageLink} alt={book.title} />
                      <div className="author_details">
                        <h6>{book.title}</h6>
                        <p>-{book.authors}</p>
                      </div>
                    </td>
                    <td className="genre">
                      <p>{book.genre}</p>
                    </td>
                    <td className="reading_progress">
                      {Math.floor(Math.random() * (max - min + 1) + min)}%
                    </td>
                    <td className="last_read">
                      {moment(book.createdAt).fromNow()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Views;
