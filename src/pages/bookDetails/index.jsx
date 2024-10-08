import React from 'react';
const BookDetails = () => {
  

   

    // Example of a BookDetails component
  
      return (
        <div className="book-details">
          {/* Book Cover */}
          <div className="book-cover">
            <img src={book.coverImage} alt={`${book.title} cover`} />
          </div>
    
          {/* Book Title */}
          <h1>{book.title}</h1>
    
          {/* Author */}
          <h3>by {book.author}</h3>
    
          {/* Book Description */}
          <p className="description">{book.description}</p>
    
          {/* Genres */}
          <div className="genres">
            <strong>Genres: </strong>
            {book.genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span>
            ))}
          </div>
    
          {/* Publication Date */}
          <p>
            <strong>Published: </strong> {book.publicationDate}
          </p>
    
          {/* ISBN */}
          <p>
            <strong>ISBN: </strong> {book.isbn}
          </p>
    
          {/* Publisher */}
          <p>
            <strong>Publisher: </strong> {book.publisher}
          </p>
    
          {/* Language */}
          <p>
            <strong>Language: </strong> {book.language}
          </p>
    
          {/* Pages */}
          <p>
            <strong>Pages: </strong> {book.pages}
          </p>
    
          {/* Availability */}
          <p>
            <strong>Availability: </strong> {book.availability ? 'Available' : 'Checked Out'}
          </p>
    
          {/* Location in Library */}
          <p>
            <strong>Location: </strong> {book.location}
          </p>
    
          {/* Ratings */}
          <div className="ratings">
            <strong>Ratings: </strong> {book.rating} / 5
          </div>
          </div>
        
  )
};

export default BookDetails;


