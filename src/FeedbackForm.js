import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'Suggestion',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comments) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Submitted Data:', formData);

    setFormData({
      name: '',
      email: '',
      feedbackType: 'Suggestion',
      comments: '',
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      feedbackType: 'Suggestion',
      comments: '',
    });

    setSubmitted(false);
  };

  return (
    <div className="feedback-form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </label>

          <label>
            Feedback Type:
            <select
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
            >
              <option value="Suggestion">Suggestion</option>
              <option value="Complaint">Complaint</option>
              <option value="Inquiry">Inquiry</option>
            </select>
          </label>

          <label>
            Comments:
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Your Comments"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you for your feedback!</h2>
          <button onClick={resetForm}>Submit Another Feedback</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;