import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const NavBar = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isCollectionRoute = location.pathname.includes("collection");
  const handleSearchIconClick = () => {
    if (isCollectionRoute) {
      setShowSearch(true);
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        {" "}
        <img
          src={assets.logo}
          className="w-36 brightness-0 contrast-200"
          alt="logo"
        />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">HOME</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">COLLECTION</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">ABOUT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-gray-700">CONTACT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-8 cursor-pointer brightness-0 contrast-200"
          alt="search"
          onClick={handleSearchIconClick}
        />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer brightness-0 contrast-200"
            src={assets.profile_icon}
            alt="profile"
          />
          <div className="dropdown-menu absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex w-36 flex-col gap-2 bg-black px-5 py-3 text-gray-300">
              <p className="cursor-pointer hover:text-white">My Profile</p>
              <p className="cursor-pointer hover:text-white">Orders</p>
              <p className="cursor-pointer hover:text-white">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="min-w-8s w-8 brightness-0 contrast-200"
          />
          <p className="absolute right-[-1px] bottom-[-1px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer brightness-[0] contrast-200 sm:hidden"
          alt="menu"
        />
      </div>
      {/* //*sidebar menu for small screen
       */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all duration-500 ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-300">
          <div
            onClick={() => setVisible(false)}
            className="mt-10 flex cursor-pointer items-center gap-2 p-4"
          >
            <img
              src={assets.dropdown_icon}
              className="h-6 rotate-180 invert"
              alt="dropdown"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="my-4 rounded-lg py-2 pl-6 text-center text-gray-300 transition-all hover:bg-gray-900"
            to="/"
          >
            <p className="">HOME</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="my-4 rounded-lg py-2 pl-6 text-center transition-all hover:bg-gray-900"
            to="/collection"
          >
            <p className="">COLLECTION</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="my-4 rounded-lg py-2 pl-6 text-center transition-all hover:bg-gray-900"
            to="/about"
          >
            <p className="">ABOUT</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="my-4 rounded-lg py-2 pl-6 text-center transition-all hover:bg-gray-900"
            to="/contact"
          >
            <p className="">CONTACT</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
