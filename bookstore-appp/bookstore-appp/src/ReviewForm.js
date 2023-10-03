import React, { useState } from 'react';

function ReviewForm({ onReviewSubmit }) {
  const [rating, setRating] = useState(5); // Default to 5 stars
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onReviewSubmit({ rating, comment });
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ReviewForm;
