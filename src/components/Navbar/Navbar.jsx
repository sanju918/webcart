import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import LinkWithIcons from "./LinkWithIcons";
import "./Navbar.css";

import homeIcon from "../../assets/icons/home.png";
import packageIcon from "../../assets/icons/package.png";
import loginIcon from "../../assets/icons/login.png";
import signUpIcon from "../../assets/icons/sign-up.png";
import ordersIcon from "../../assets/icons/orders.png";
import logoutIcon from "../../assets/icons/power-off.png";
import cartIcon from "../../assets/icons/cart.png";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { getSuggestionsAPI } from "../../services/productServices";

const Navbar = () => {
  const [suggestions, setSuggetions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(-1);

  const navigate = useNavigate();

  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
    setSuggetions([]);
  };

  useEffect(() => {
    if (search.trim() !== "") {
      getSuggestionsAPI(search)
        .then((res) => {
          setSuggetions(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setSuggetions([]);
    }
  }, [search]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearch("");
      setSuggetions([]);
      setSelectedItem(-1);
    }

    if (e.key === "ArrowUp") {
      setSelectedItem((current) => Math.max(current - 1, 0));
    } else if (e.key === "ArrowDown") {
      setSelectedItem((current) =>
        Math.min(current + 1, suggestions.length - 1)
      );
    } else if (e.key === "Enter" && selectedItem > -1) {
      const suggestion = suggestions[selectedItem];
      navigate(`/products?search=${suggestion.title}`);
      setSearch("");
      setSuggetions([]);
      setSelectedItem(-1);
    }
  };

  console.log(selectedItem);

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
          <form className="align_center navbar_form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="navbar_search"
              placeholder="Search.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search_button" type="submit">
              Search
            </button>
            {suggestions.length > 0 && (
              <ul className="search_result">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={suggestion._id}
                    className={
                      selectedItem === index
                        ? "search_suggestion_link active"
                        : "search_suggestion_link "
                    }
                  >
                    <Link
                      to={`/products?search=${suggestion.title}`}
                      onClick={() => {
                        setSearch("");
                        setSuggetions([]);
                      }}
                    >
                      {suggestion.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
        <div className="align_center navbar_links">
          <LinkWithIcons title="Home" link="/" emoji={homeIcon} />
          <LinkWithIcons
            title="Products"
            link="/products"
            emoji={packageIcon}
          />
          {!user && (
            <>
              <LinkWithIcons title="Login" link="/login" emoji={loginIcon} />
              <LinkWithIcons title="SignUp" link="/signup" emoji={signUpIcon} />
            </>
          )}
          {user && (
            <>
              <LinkWithIcons
                title="Orders"
                link="/myorders"
                emoji={ordersIcon}
              />
              <LinkWithIcons title="Logout" link="/logout" emoji={logoutIcon} />
              <NavLink to="/cart" className="align_center">
                <img src={cartIcon} alt="cart icon" className="cart_emoji" />
                <p className="align_center cart_counts">{cart.length}</p>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
