import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="Bookgrid grid-flow-rowgap-4">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-image">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div className="book-info">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>  {/* Joining multiple authors */}
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default BookList;
