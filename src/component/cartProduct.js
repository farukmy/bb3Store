import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({
  id,
  image,
  name,
  category,

  qty,
  total,
  price,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-200 p-2 flex gap-5 rounded border-2 border-slate-300">
      <div className="bg-white p-3 rounded overflow-hidden">
        <img src={image} className="h-28 w-36 object-cover " />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className=" cursor-pointer text-xl text-slate-700 hover:text-red-500"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className=" text-slate-500  font-medium ">{category}</p>
        <p className=" font-bold text-base">
          <span className="text-green-700">₦</span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-500 p-2"
            >
              <FiMinus />
            </button>
            <p className="font-semibold p-1"> {qty}</p>
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-600 p-2 "
            >
              <FiPlus />
            </button>
          </div>
          <div className="flex items-center font-bold text-slate-700 gap-2">
            <p>Total :</p>

            <p>
              {" "}
              <span className="text-green-700">₦</span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
