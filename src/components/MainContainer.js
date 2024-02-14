import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainContainer = () => {
  const cards = useSelector((store) => store.card?.cardData);

  if (!cards || cards.length === 0) return null;

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        <Link to='/category'>
          <button className='m-2 p-2 md:p-3 lg:p-4 border border-box rounded-lg shadow-lg hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400'>
            Men's Clothing
          </button>
        </Link>
        <Link to='/category'>
          <button className='m-2 p-2 md:p-3 lg:p-4 border border-box rounded-lg shadow-lg hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400'>
            Jewellery
          </button>
        </Link>
        <Link to='/category'>
          <button className='m-2 p-2 md:p-3 lg:p-4 border border-box rounded-lg shadow-lg hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400'>
            Electronics
          </button>
        </Link>
        <Link to='/category'>
          <button className='m-2 p-2 md:p-3 lg:p-4 border border-box rounded-lg shadow-lg hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400'>
            Women's Clothing
          </button>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap pt-4 mb-4 ">
        {cards.map((card, index) => (
          <Link to={`/watch/${card.id}`} key={card.id}>
            <Card
              key={card.id}
              id={card.id}
              category={card.category}
              image={card.image}
              price={card.price}
              title={card.title}
              rating={card.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
