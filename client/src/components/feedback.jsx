import React, { useState } from "react";

const FeedbackForm = ({ onClose }) => {
  const initialFormData = {
    name: "",
    email: "",
    feedback: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send feedback to the server)

    // For demonstration purposes, let's log the form data to the console
    console.log("Form data submitted:", formData);

    // You can add additional logic here, such as sending the data to a server or displaying a thank-you message.

    // For now, simulate a successful submission by updating the state
    setIsSubmitted(true);
  };

  const handleCancel = () => {
    // Reset the form data and close the form
    setFormData(initialFormData);
    onClose();
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="feedback" className="block text-gray-700 font-bold mb-2">
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              required
            />
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Feedback
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="text-green-600 text-center font-bold">
          Thank you for your feedback! We appreciate your input.
          <br />
          <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
        </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
