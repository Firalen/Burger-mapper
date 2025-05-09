import React, { useState } from 'react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', rating: 5, comment: 'Amazing place! Highly recommend.', approved: true },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Great atmosphere and friendly staff.', approved: true },
    { id: 3, name: 'Emily Brown', rating: 3, comment: 'Good, but could be better.', approved: true }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      // Add the new review with `approved: false`
      setReviews((prev) => [
        ...prev,
        { id: prev.length + 1, ...newReview, approved: false }
      ]);
      setNewReview({ name: '', rating: '', comment: '' });
      alert('Your review has been submitted and is awaiting approval.');
    }
  };

  const filteredReviews = reviews
    .filter((review) => review.approved) // Only show approved reviews
    .filter((review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((review) => (filterRating ? review.rating === parseInt(filterRating) : true));

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-rose-600 mb-4">User Reviews</h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <select
          value={filterRating}
          onChange={handleFilterChange}
          className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          <option value="">Filter by Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Display Filtered Reviews */}
      <div className="space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600">Rating: {review.rating} ⭐</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews found.</p>
        )}
      </div>

      {/* Add New Review */}
      <form onSubmit={handleSubmit} className="mt-6">
        <h3 className="text-lg font-bold mb-2">Add Your Review</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Comment</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-semibold py-2 rounded hover:bg-rose-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}