import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function UserBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-app-4z8g.onrender.com/book/userbook");
        console.log(res.data);

        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="h-screen">
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-black  ">
          <div className="pt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">
              Published Books By Users{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12 text-justify font-extrabold ">
              <span className="text-red-500 font-19"> Welcome to our platform!</span><span className="dark:text-white"> This is a space where creativity meets opportunity. Here, you'll find a diverse collection of books published by our amazing users, each showcasing their talent, knowledge, and unique perspectives. Explore these inspiring works, discover new ideas, and maybe even publish your own masterpiece. Happy reading!</span>     </p>
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
      </div>
    </>
  );
}

export default UserBooks;
