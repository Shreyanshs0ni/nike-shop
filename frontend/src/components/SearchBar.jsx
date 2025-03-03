import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-inherit text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="searchIcon" className="w-5" />
      </div>
      <img
        src={assets.cross_icon}
        alt="crossIcon"
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  );
};

export default SearchBar;
