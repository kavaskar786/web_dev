import React from 'react';

function BookList({ books, onBookSelect }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} onClick={() => onBookSelect(book)}>
          {book.title}
        </li>
      ))}
    </ul>
  );
}

export default BookList;
