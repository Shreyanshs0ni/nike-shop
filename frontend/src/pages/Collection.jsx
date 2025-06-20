import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter((item) =>
          subCategory.includes(item.subCategory),
        );
      }
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col gap-1 border-t border-gray-500 pt-10 sm:flex-row sm:gap-10">
      {/* flter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="my-2 flex cursor-pointer items-center gap-2 text-xl"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="dropdownIcon"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* Category filter */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? " " : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub Catergory filter */}
        <div
          className={`my-5 border border-gray-300 py-3 pl-5 ${showFilter ? " " : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2" onChange={toggleSubCategory}>
              <input type="checkbox" className="w-3" value={"Lifestyle"} />
              Lifestyle
            </p>
            <p className="flex gap-2" onChange={toggleSubCategory}>
              <input type="checkbox" className="w-3" value={"Running"} />
              Running
            </p>
            <p className="flex gap-2" onChange={toggleSubCategory}>
              <input type="checkbox" className="w-3" value={"Football"} />
              Football
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* sorting */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 px-2 text-sm"
          >
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        {/* map products */}
        <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
