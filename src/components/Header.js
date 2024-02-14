import React from "react";
import useCard from "../hooks/useCard";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import { useSelector } from "react-redux";

const Header = () => {
  useCard();
  useCategory();

  const cartItems = useSelector((store) => store.card.cart);
  console.log(cartItems);

  return (
    <div>
      <div className="flex flex-col md:flex-row m-2 p-5 border border-box shadow-lg transition duration-500 ease-in-out hover:scale-100 hover:shadow-slate-400">
        <h1 className="text-2xl mb-4 md:mb-0 md:mr-8">Online Shopping</h1>
        <div className="flex flex-col md:flex-row md:ml-auto">
          <Link to="/">
            <button className="mb-2 md:mb-0 md:mr-2 border border-box p-2 rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white">
              Home
            </button>
          </Link>
          <Link to="/cart">
            <button className="border border-box p-2 rounded-lg shadow-lg bg-red-300 hover:bg-slate-500 text-white md:inline-block">
              Cart [{cartItems.length} items]
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;



