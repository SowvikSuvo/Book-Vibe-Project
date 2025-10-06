import React from "react";
import bookimg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-16 w-full  bg-gray-200 rounded-xl mt-5 mb-5">
      <div>
        <h1 className="text-5xl font-bold py-5">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-primary">View The List</button>
      </div>
      <div>
        <img className="w-/12 rounded-2xl" src={bookimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
