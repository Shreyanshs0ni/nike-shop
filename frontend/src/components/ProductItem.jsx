import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="transition duration-300 ease-in-out hover:scale-110"
          src={image[0]}
          alt="productImg"
        />{" "}
      </div>
      <p className="test-sm pt-3 pb-1 text-gray-700">{name}</p>
      <p className="test-sm font-medium text-gray-700">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
