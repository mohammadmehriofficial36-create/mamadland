import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import Logo from "./Logo";

export default function Header() {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const inputRef = useRef();

  return (
    <>
      <div className="md:hidden">
        <div className="fixed top-0 right-0 left-0 bg-white flex items-center justify-between px-4 py-5 border-b border-b-gray-100 gap-x-4">
          <div className="flex items-center relative w-full text-gray-500">
            <IoSearchOutline
              size={28}
              className="absolute mr-2.5 cursor-pointer"
            />
            <input
              type="search"
              className="bg-gray-100 w-full h-10.5 rounded-md text-sm pe-2 pr-12"
              name="search"
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
                className="flex items-center absolute mr-12 text-sm gap-x-1 cursor-text"
              >
                <p>جستجو در</p>
                <Logo size="text-lg" />
              </div>
            )}
          </div>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive ? "text-rose-500" : "text-gray-500"
            }
          >
            <RiShoppingCartLine className="bg-gray-100 p-1.5 w-[52px] h-10.5 rounded-md cursor-pointer transition duration-200" />
          </NavLink>
        </div>
        <div className="fixed bottom-0 text-sm right-0 left-0 bg-white pt-4 pb-1 border-t border-t-gray-100 text-gray-500 flex items-center justify-around">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-y-1 transition duration-200 ${
                isActive ? "text-rose-500 -translate-y-3" : "text-gray-500"
              }`
            }
          >
            <AiOutlineHome size={22} />
            <p>خانه</p>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex flex-col items-center gap-y-1 transition duration-200 ${
                isActive ? "text-rose-500 -translate-y-3" : "text-gray-500"
              }`
            }
          >
            <FaShop size={22} />
            <p>فروشگاه</p>
          </NavLink>
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `flex flex-col items-center gap-y-1 transition duration-200 ${
                isActive ? "text-rose-500 -translate-y-3" : "text-gray-500"
              }`
            }
          >
            <AiOutlineLogin size={22} />
            <p>ورود</p>
          </NavLink>
        </div>
      </div>

      <div className="hidden md:flex">pc</div>
    </>
  );
}
