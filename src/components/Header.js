import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNamereact, setBtnNamereact] = useState("Login");

  return (
    <div className="flex justify-between bg-gray-200 shadow-md h-25">
      <div>
        <img className="w-[100px] h-[104px]" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => {
                btnNamereact === "Login"
                  ? setBtnNamereact("Logout")
                  : setBtnNamereact("Login");
              }}
            >
              {btnNamereact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
