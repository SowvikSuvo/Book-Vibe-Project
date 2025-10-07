import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    yearOfPublishing,
    bookId,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-md border p-6 mt-2">
        <figure className="p-4 bg-gray-100 w-3/3 mx-auto">
          <img className="h-[170px] rounded" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="font-semibold">Book by: {publisher}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge ">{category}</div>
            <div className="badge ">
              {rating}
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
