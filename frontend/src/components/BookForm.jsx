import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import toast from "react-hot-toast";

const BookForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [categeory, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const bookData = { name, title, price, categeory, image };

    try {
      const response = await axios.post('http://localhost:4001/user/create', bookData);
      setMessage(response.data.message); // Display success message
      toast.success("Book Stored you can vist books");
      setName('');
      setTitle('');
      setPrice('');
      setCategory('');
      setImage('');
    } catch (error) {
      setMessage('Error: Unable to save book data');
    }
  };
  const handleInputChange = () => {
    setMessage('');
  };


  return (<>

    <Navbar />

    <div className=' h-screen sm:py-60 md:py-40'>
      <div className="max-w-4xl mx-auto  p-6 bg-white rounded-lg shadow-md  border  dark:text-black ">
        <h2 className="text-2xl font-semibold text-center  mb-6">Create New Book</h2>

        {message && (
          <div className="mb-4 text-center text-white p-3 rounded bg-green-500">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Book Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleInputChange();
              }
              }
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Book Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); handleInputChange(); }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => { setPrice(e.target.value); handleInputChange(); }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={categeory}
              onChange={(e) => { setCategory(e.target.value); handleInputChange(); }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => { setImage(e.target.value); handleInputChange(); }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create Book
            </button>
          </div>
        </form>
      </div>
    </div>

  </>
  );
};

export default BookForm;
