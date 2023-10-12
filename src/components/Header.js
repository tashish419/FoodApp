import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNamereact, setBtnNamereact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="login"
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
