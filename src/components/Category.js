import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryData from "./CategoryData";
import { Link } from "react-router-dom";

const Category = () => {
   
    const [data, setData] = useState()
   
const dataCategory = useSelector((store) => store.card?.categoryData)
console.log(dataCategory)

if ( !dataCategory || dataCategory.length === 0 ) return null;

//const { category, description, image, price, title, rating, id } = dataCategory[0]

    return (
        <div className="flex">
            <Link>
            {dataCategory.map((data, index) => (<CategoryData key={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} category={data.category} />) )}
            </Link>
        </div>
    )
}

export default Category