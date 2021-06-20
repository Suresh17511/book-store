import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({open, onClose, bookData}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <span>
          <i className="far fa-times-circle" onClick={onClose}></i>
        </span>
        <div className="img__container">
          <img src={bookData.imageUrl} alt={bookData.bookName} />
        </div>
        <h2>{bookData.bookName}</h2>
        {bookData.author.map((author) => (
          <div className="authors" key={bookData.author}>
            <p>{author}</p>
          </div>
        ))}
        <h6>{bookData.description.split(' ').splice(0, 30).join(' ')}...</h6>
      </div>
    </>,
    document.getElementById('portal')
  );
}
