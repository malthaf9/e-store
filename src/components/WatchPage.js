import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cardSlice";
import Shimmer from "./Shimmer";
import { WATCH_PAGE_API } from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleData, setSingleData] = useState();

  //fetch data from API to get single items
  const fetchData = async () => {
    const data = await fetch(WATCH_PAGE_API + id);
    const json = await data.json();
    console.log(json);
    setSingleData(json);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleAddItem = (singleData) => {
    dispatch(addItem(singleData));
  };

  return (
    <div>
      {singleData ? (
        <div className="p-5 m-6 border border-box shadow-lg rounded-lg hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-100 hover:shadow-slate-400">
          <div className="flex flex-col md:flex-row">
            <img
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 object-cover"
              src={singleData.image}
              alt={singleData.title}
            />
            <div className="md:pl-6 mt-4 md:mt-0">
              <h1 className="text-3xl">{singleData.title}</h1>
              <p className="p-2 pt-4 text-2xl">${singleData.price}</p>
              <h1 className="border p-2 text-2xl bg-slate-500 text-white rounded-lg shadow-lg">
                {singleData.category}
              </h1>
              <div className="flex items-center pt-6 text-xl font-thin">
                Rating: {singleData.rating.rate}★
              </div>
              <p className="pt-6 text-xl font-thin">{singleData.description}</p>
              <div className="pt-8">
                <button
                  className="border p-4 rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white"
                  onClick={() => handleAddItem(singleData)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default WatchPage;
