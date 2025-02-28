import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
          <div className="py-8 text-center text-2xl">
              
        <Title text1={"NEW&"} text2={"FEATURED"} />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          quia ipsa ea rerum dolore nobis adipisci quod atque.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
