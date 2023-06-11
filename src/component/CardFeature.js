import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };
  return (
    <div className="min-w-[180px] h-100px max-w-[180] bg-white hover:shadow-lg cursor-pointer drop-shadow-lg py-4 px-4 flex flex-col pt- ">
      {image ? (
        <>
          <Link
            to={`/menu/${id} `}
            onClick={() => window.scrollTo({ top: "0", bahavior: "smooth" })}
          >
            <div className="h-24 flex flex-col justify-center items-center">
              <img src={image} className="h-full  " />
            </div>
            <h3 className="font-semibold text-slate-400 capitalize text-lg my-4 mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-500 font-medium">{category}</p>
            <p className=" font-bold">
              <span className="text-green-700">₦</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-yellow-500 py-1 my-1  rounded hover:bg-yellow-600 w-full "
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
