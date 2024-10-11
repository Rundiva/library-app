import React, { useState } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');        // State for search input
  const [results, setResults] = useState([]);    // State for storing fetched results
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null);      // State for handling errors

  // Function to handle search query and fetch results from the API
  const searchBooks = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await fetch(`https://library-api-d5o1.onrender.com/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }
      const data = await response.json();
      setResults(data); // Update state with fetched results
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Function to handle search button click
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchBooks();
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <div id="searchBar" className="flex bg-[#F8A928] box-content-h-[30rem] w-[100vw] p-24 mt-[-25rem] ">
      {/* Input field for searching */}
      <input className="flex w-[35rem] h-[3rem] p-[2rem] rounded-l-full justify-center" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      
      {/* Search button */}
      <button className="flex bg-[#F8A928] w-[8rem] text-white justify-center items-center" onClick={handleSearch}>Search</button>

      {/* Display loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Display error if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display search results */}
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((book, index) => (
              <li key={index}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
