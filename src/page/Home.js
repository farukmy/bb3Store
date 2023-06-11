import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { GrNext, GrPrevious } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCardList = productData.slice(1, 5);
  const homeProductCardListGroceries = productData.filter(
    (el) => el.category === "groceries",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4  py-2">
        <div className="md:w-1/2  py-4">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-sltate-900">Bike delivery</p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/421/581/original/vector-bicycle-icon.jpg"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold">
            Before you know it!{" "}
            <span className="text-red-500 text-">knock knock</span> at your
            door.
          </h2>
          <p className="p-3 text-2xl">
            {" "}
            We are BB3 and we do things a little differently here. That's why it
            is called the standouts. We help trace the dots for you, connecting
            oppurtunites to you. Making your day better!{" "}
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now!
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover: bg-slate-300 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover: bg-slate-300 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCardListGroceries[0]
            ? homeProductCardListGroceries.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "groceries"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index} />
              ))}
        </div>
      </div>
      <AllProduct heading={"Your Products"} />
    </div>
  );
};

export default Home;
