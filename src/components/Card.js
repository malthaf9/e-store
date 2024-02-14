import React from 'react';

const Card = ({ category, image, price, title, rating }) => {
  return (
    <div className='inline-block space-x-2 md:inline-flex'>
      <div className='w-full md:w-[250px] mx-auto rounded-lg border border-box shadow-lg p-1 md:mx-6 hover:bg-gray-200 transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400'>
        <img className='w-full rounded-lg' src={image} alt='card-image' />
        <h1 className='p-1 text-l'>{title}</h1>
        <span className='p-2 font-thin'>${price}</span>
        <p className='px-2 font-thin'>{category}</p>
        <h6 className='px-2 font-thin'>{rating.rate}<span className=''>★</span></h6>
      </div>
    </div>
  );
};

export default Card;





