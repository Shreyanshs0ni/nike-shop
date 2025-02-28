import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="py-8 text-center text-2xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
          ratione.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default BestSeller;
