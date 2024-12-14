import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-app-4z8g.onrender.com/book");
        console.log(res.data);
        const filter = res.data.filter((item) => item.categeory === 'PAID')
        setBook(filter);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 text-justify">
            As soon as you log in and step into the book store, it feels like entering a magical realm. Shelves filled with books stretch endlessly, like pathways to countless worlds of knowledge and imagination.

            Each corner of the store whispers stories waiting to be discovered. Adventure novels brim with epic journeys, mystery books hold secrets yet to be unraveled, and self-help guides invite you to grow and transform.

            In one section, colorful children's tales transport you back to childhood wonder, while in another, classic literature stands tall, carrying the wisdom of ages.

            As you walk further, the aroma of fresh pages and the soft hum of curiosity surround you, as if the books themselves are alive, calling you to pick them up and dive into their worlds. Here, every book is a doorway, and the store is yours to explore.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;