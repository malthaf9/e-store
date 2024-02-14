import React from "react";

const CategoryData = ({ title, image, price, category, rating }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-[250px] rounded-lg border border-box shadow-lg p-4 m-6 mx-6 hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400">
        <img className="w-56 rounded-lg" src={image} alt="card-image" />
        <h1 className="p-1 text-l">{title}</h1>
        <span className="p-2 font-thin">${price}</span>
        <p className="px-2 font-thin">{category}</p>
        <h6 className="px-2 font-thin">
          {rating.rate}
          <span className="">★</span>
        </h6>
      </div>
    </div>
  );
};

export default CategoryData;
