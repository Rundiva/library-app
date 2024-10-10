// import React from 'react';
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";
// import K from "../../constants";

const Book = () => {

  // Example of a BookDetails component

  return (
    <div className="book-details">
      {/* Book Cover */}
      <div className="book-cover">
        <img src={Book.coverImage} alt={`${Book.title} cover`} />
      </div>

      {/* Book Title */}
      <h1>{Book.title}</h1>

      {/* Author */}
      <h3>by {Book.author}</h3>

      {/* Book Description */}
      <p className="description">{Book.description}</p>

      {/* Genres */}
      <div className="genres">
        <strong>Genres: </strong>
        {Book.genres.map((genre, index) => (
          <span key={index} className="genre">
            {genre}
          </span>
        ))}
      </div>

      {/* Publication Date */}
      <p>
        <strong>Published: </strong> {Book.publicationDate}
      </p>

      {/* ISBN */}
      <p>
        <strong>ISBN: </strong> {Book.isbn}
      </p>

      {/* Publisher */}
      <p>
        <strong>Publisher: </strong> {Book.publisher}
      </p>

      {/* Language */}
      <p>
        <strong>Language: </strong> {Book.language}
      </p>

      {/* Pages */}
      <p>
        <strong>Pages: </strong> {Book.pages}
      </p>

      {/* Availability */}
      <p>
        <strong>Availability: </strong> {Book.availability ? 'Available' : 'Checked Out'}
      </p>

      {/* Location in Library */}
      <p>
        <strong>Location: </strong> {Book.location}
      </p>

      {/* Ratings */}
      <div className="ratings">
        <strong>Ratings: </strong> {Book.rating} / 5
      </div>
    </div>

  )
};

export default Book;


