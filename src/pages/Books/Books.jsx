import React, { Suspense, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import Book from "./Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);
  // useEffect(() => {
  //   fetch("/booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });
  return (
    <div>
      <h1 className="text-3xl text-center p-6 font-bold"> Books</h1>
      <Suspense fallback={<span>Loading....⏳</span>}>
        <div className="grid  justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 mx-auto  ">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
