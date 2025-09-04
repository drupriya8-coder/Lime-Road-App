import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 1) {
      newErrors.name = "Name must be at least 1 character";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Message validation (max 150 words)
    const wordCount = formData.message.trim().split(/\s+/).length;
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (wordCount > 150) {
      newErrors.message = "Message cannot exceed 150 words";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting!");
      return;
    }

    // Clear errors if valid
    setErrors({});
    toast.success("Submitted successfully!");
    setSubmitted(true);

    // Success message 3s ke baad hide
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fill the form below and we will get back to you.
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                  duration-200 ease-in-out"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                  duration-200 ease-in-out"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 
                  transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            {/* Button */}
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 
                focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
