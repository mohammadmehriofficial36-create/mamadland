import { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { PiBuilding } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import Logo from "./Logo";

export default function Header() {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const inputRef = useRef();

  return (
    <>
      <div className="md:hidden text-gray-500 text-sm">
        <div className="fixed top-0 right-0 left-0 border-b border-b-gray-100 px-4 py-5 bg-white">
          <div className="flex items-center justify-between gap-x-4 container mx-auto">
            <div className="flex items-center relative w-full">
              <IoSearchOutline
                size={28}
                className="absolute mr-2.5 cursor-pointer"
              />
              <input
                type="search"
                className="bg-gray-100 w-full h-10.5 rounded-md pe-2 pr-12"
                name="search"
                autoComplete="off"
                ref={inputRef}
                onChange={(e) =>
                  e.target.value.trim()
                    ? setSearchVisibility(false)
                    : setSearchVisibility(true)
                }
              />
              {searchVisibility && (
                <div
                  onClick={() => inputRef.current?.focus()}
                  className="flex items-center absolute mr-12 gap-x-1 cursor-text"
                >
                  <p>جستجو در</p>
                  <Logo size="text-lg" />
                </div>
              )}
            </div>
            <NavLink
              to="/checkout"
              className={({ isActive }) => (isActive ? "text-rose-500" : "")}
            >
              <RiShoppingCartLine className="bg-gray-100 p-1.5 w-[52px] h-10.5 rounded-md transition duration-200" />
            </NavLink>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 border-t border-t-gray-100 pt-4 pb-1 bg-white px-4">
          <div className="flex items-center justify-between container mx-auto">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `flex flex-col items-center gap-y-1 transition duration-200 ${
                  isActive ? "text-rose-500 -translate-y-3" : ""
                }`
              }
            >
              <BsShop size={22} />
              <p>فروشگاه</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex flex-col items-center gap-y-1 transition duration-200 ${
                  isActive ? "text-rose-500 -translate-y-3" : ""
                }`
              }
            >
              <PiBuilding size={22} />
              <p>درباره ما</p>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center gap-y-1 transition duration-200 ${
                  isActive ? "text-rose-500 -translate-y-3" : ""
                }`
              }
            >
              <AiOutlineHome size={22} />
              <p>خانه</p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex flex-col items-center gap-y-1 transition duration-200 ${
                  isActive ? "text-rose-500 -translate-y-3" : ""
                }`
              }
            >
              <MdOutlineContactPhone size={22} />
              <p>ارتباط باما</p>
            </NavLink>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                `flex flex-col items-center gap-y-1 transition duration-200 ${
                  isActive ? "text-rose-500 -translate-y-3" : ""
                }`
              }
            >
              <AiOutlineLogin size={22} />
              <p>ورود</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="hidden md:block fixed top-0 right-0 left-0 bg-white text-sm text-gray-500 border-b border-b-gray-100 px-4 py-5">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center gap-x-5">
            <Link to="/">
              <Logo size="text-3xl" />
            </Link>
            <div className="flex items-center relative w-full">
              <IoSearchOutline
                size={28}
                className="cursor-pointer absolute mr-2.5"
              />
              <input
                type="search"
                name="search"
                autoComplete="off"
                className="bg-gray-100 h-10.5 rounded-md pe-2 pr-12 w-90 lg:w-110 xl:w-130 2xl:w-150"
                placeholder="جستجو..."
              />
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <NavLink
              to="/checkout"
              className={({ isActive }) => (isActive ? "text-rose-500" : "")}
            >
              <RiShoppingCartLine className="bg-gray-100 p-2 w-[52px] h-10.5 rounded-md transition duration-200" />
            </NavLink>
            <NavLink
              to="/auth"
              className={({ isActive }) => (isActive ? "text-rose-500" : "")}
            >
              <AiOutlineLogin className="bg-gray-100 p-2 w-[52px] h-10.5 rounded-md transition duration-200" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
