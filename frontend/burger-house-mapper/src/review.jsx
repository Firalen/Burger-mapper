import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing place! The atmosphere was perfect for our anniversary dinner. The staff was incredibly attentive and the food was outstanding.',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      place: 'Sunset Restaurant',
      approved: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great atmosphere and friendly staff. The view was breathtaking, especially during sunset. Would definitely come back for another date night!',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80',
      place: 'Mountain View Cafe',
      approved: true
    },
    {
      id: 3,
      name: 'Emily Brown',
      rating: 3,
      comment: 'Good experience overall. The place was nice but a bit crowded. The food was decent but could use some improvement.',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      place: 'City Lights Bar',
      approved: true
    }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '', place: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment && newReview.place) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setReviews((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            ...newReview,
            date: 'Just now',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            approved: false
          }
        ]);
        setNewReview({ name: '', rating: '', comment: '', place: '' });
        setIsSubmitting(false);
        alert('Your review has been submitted and is awaiting approval.');
      }, 1000);
    }
  };

  const filteredReviews = reviews
    .filter((review) => review.approved)
    .filter((review) =>
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.place.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((review) => (filterRating ? review.rating === parseInt(filterRating) : true));

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Couples <span className="text-rose-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from couples who have experienced our recommended date spots
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="">All Ratings</option>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} {rating === 1 ? 'Star' : 'Stars'}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-rose-600 font-medium">{review.place}</p>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Place Name
                </label>
                <input
                  type="text"
                  name="place"
                  value={newReview.place}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewReview(prev => ({ ...prev, rating: rating }))}
                    className={`p-2 rounded-full ${
                      newReview.rating === rating
                        ? 'bg-rose-500 text-white'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}