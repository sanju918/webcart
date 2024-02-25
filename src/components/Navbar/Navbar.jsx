import { NavLink } from "react-router-dom";

import LinkWithIcons from "./LinkWithIcons";
import "./Navbar.css";

import homeIcon from "../../assets/icons/home.png";
import packageIcon from "../../assets/icons/package.png";
import loginIcon from "../../assets/icons/login.png";
import signUpIcon from "../../assets/icons/sign-up.png";
import ordersIcon from "../../assets/icons/orders.png";
import logoutIcon from "../../assets/icons/power-off.png";
import cartIcon from "../../assets/icons/cart.png";

const Navbar = () => {
  return (
    <>
      <nav className="align_center navbar">
        <div className="align_center">
          <h1
            className="navbar_heading"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Cloud Level
          </h1>
          <form className="align_center navbar_form">
            <input
              type="text"
              className="navbar_search"
              placeholder="Search.."
            />
            <button className="search_button" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="align_center navbar_links">
          <LinkWithIcons title="Home" link="/" emoji={homeIcon} />
          <LinkWithIcons
            title="Products"
            link="/products"
            emoji={packageIcon}
          />
          <LinkWithIcons title="Login" link="/login" emoji={loginIcon} />
          <LinkWithIcons title="SignUp" link="/signup" emoji={signUpIcon} />
          <LinkWithIcons title="Orders" link="/myorders" emoji={ordersIcon} />
          <LinkWithIcons title="Logout" link="/logout" emoji={logoutIcon} />
          <NavLink href="/cart" className="align_center">
            <img src={cartIcon} alt="cart icon" className="cart_emoji" />
            <p className="align_center cart_counts">0</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
