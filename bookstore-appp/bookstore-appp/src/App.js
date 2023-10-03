import React, { useState } from 'react';
import './App.css'; // Import the app.css file for styling
import SearchBar from './SearchBar';
import BookList from './BookList';
import BookDetail from './BookDetail';
import ReviewForm from './ReviewForm';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description for Book 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description for Book 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      description: 'Description for Book 3',
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSearch = (searchTerm) => {
    // Implement book search logic here and update the 'books' state
    // For simplicity, let's filter books based on the title containing the search term
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
    setSelectedBook(null); // Clear selected book when searching
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleReviewSubmit = (review) => {
    // Implement review submission logic here and update the book's reviews
    // For simplicity, we'll just log the review to the console

    // Display submission status and submitted data
    setSubmissionStatus('Review Submitted!');
    setSubmittedData(review);
  };

  return (
    <div>
      <h1>Online Bookstore</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <BookList books={books} onBookSelect={handleBookSelect} />
        {selectedBook && <BookDetail book={selectedBook} />}
      </div>
      {selectedBook && (
        <div>
          <ReviewForm onReviewSubmit={handleReviewSubmit} />
          {submissionStatus && (
            <div className="submission-status">{submissionStatus}</div>
          )}
          {submittedData && (
            <div className="submitted-data">
              <h2>Submitted Data:</h2>
              <p>Rating: {submittedData.rating}</p>
              <p>Comment: {submittedData.comment}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
