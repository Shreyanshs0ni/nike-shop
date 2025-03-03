import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t border-gray-500 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      {/* product data */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* product images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto overflow-y-scroll sm:w-[18.7%] sm:flex-col sm:justify-normal">
            {productData.image.map((item, index) => (
              <img
                key={index}
                alt="productImage"
                src={item}
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="productImage" className="h-auto w-full" />
          </div>
        </div>
        {/* ------------Product Info------------ */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img src={assets.star_icon} alt="starIcon" className="5 w-3" />
            <img src={assets.star_icon} alt="starIcon" className="5 w-3" />
            <img src={assets.star_icon} alt="starIcon" className="5 w-3" />
            <img src={assets.star_icon} alt="starIcon" className="5 w-3" />
            <img src={assets.star_dull_icon} alt="starIcon" className="5 w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`cursor-pointer border border-gray-200 bg-gray-100 px-4 py-2 ${item === size ? "border-orange-400" : ""}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
            onClick={() => addToCart(productData._id, size)}
          >
            Add to Cart
          </button>
          <hr className="mt-8 text-gray-400 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>Foam midsole offers lightweight, all-day cushioning.</p>
            <p>
              Rubber outsole with a classic hoops pivot circle adds durability
              and traction.
            </p>
            <p>
              Go for a classic sport look, keep it neutral or add some energy
              with a pop of color.
            </p>
          </div>
        </div>
      </div>
      {/* -----------------Description and Review Section----------------- */}
      <div className="mt-20">
        <div className="flex">
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Description
          </p>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
          <p>
            Our icon, your way. Whether you're on the go or going out on the
            town, this Dunk has just the right amount of flash to keep you
            shining. Smooth or pebbled leather combines with reflective options
            on the Swoosh logo and backtab for a look that's so you. Add some
            vintage style with inscription elements and tongue presets that
            reference original "Be True To Your School" aesthetics. Don't forget
            to finish your look with 12 different lace color choices.
          </p>
          <p>
            Your crew isn’t just the people you see every day. It also includes
            the folx you connect with in your feed and IRL—the real ones who
            share your same weird, wonderful obsessions, no matter how strange
            they may seem. Because the Dunk has always celebrated individuality.
            From the college ballers (and their fans) who wore it in the 80s to
            the skateboarders who popularized it again in the 2000s, the Dunk
            has always been the connective tissue for crews with passions
            ranging from sport to everything beyond it. The Dunk celebrates the
            crew and what’s true to you.
          </p>
        </div>
      </div>
      {/* -----------------Display related Products------------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
