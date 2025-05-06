// src/pages/ContactPage.jsx
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You can send this to your Express backend or a third-party service like Formspree
      console.log(formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-rose-600 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Have questions, feedback, or suggestions about Dating Place? We'd love to hear from you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-semibold py-2 rounded hover:bg-rose-600 transition duration-200"
        >
          Send Message
        </button>

        {submitted && (
          <p className="mt-4 text-green-600 font-medium text-center">
            Thank you! We'll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
