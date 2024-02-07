import React, { useState, useEffect } from 'react';
import './BookData.css';

const BookData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'Kalvium',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBooks(data.books);
          console.log(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='main-container'>
      <div className="grid-container">
        {books.map(book => (
          <div key={book.id} className="grid-item">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author:{book.authors}</p>
            <p>Average Rating:{book.averageRating}</p>
            <p className='free-of-cost'>FREE</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookData;