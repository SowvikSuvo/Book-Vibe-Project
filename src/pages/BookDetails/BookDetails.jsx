import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../components/Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const singleId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === singleId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="flex flex-col  md:flex-row gap-15 w-3/3 mx-auto items-center mt-5 mb-5">
      <div className="  ">
        <img className="max-w-[400px] rounded" src={image} alt="" />
      </div>
      <div className="mt-2 mb-2 space-y-5">
        <h4 className="mt-2 mb-2 text-4xl font-bold">{bookName}</h4>
        <h1 className="mt-2 mb-2 text-2xl font-medium ">By: {author}</h1>

        <hr />
        <h1 className=" text-2xl">{category}</h1>
        <hr />

        <h2 className="mt-2 mb-6">
          <span className="font-bold">Review: </span>
          {review}
        </h2>
        <div className="flex items-center gap-5 mt-2 mb-2">
          {" "}
          <span className="font-bold">Tags:</span>
          {tags.map((tag) => (
            <button className="bg-gray-100 rounded-lg px-3 text-green-600 font-semibold">
              #{tag}
            </button>
          ))}
        </div>
        <hr />
        <div className="space-y-2 mt-2 mb-2">
          <h1>
            Number of Pages: <span className="font-bold">{totalPages}</span>{" "}
          </h1>
          <h1>
            Publisher: <span className="font-bold">{publisher}</span>{" "}
          </h1>
          <h1>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>{" "}
          </h1>
          <h1>
            Rating: <span className="font-bold">{rating}</span>{" "}
          </h1>
        </div>

        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2 "
        >
          Mark as Read
        </button>
        <button className="btn btn-info m-2">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
