import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";
import { BiCartAlt, BiHeart, BiLogOut } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { searchProduct } from "../../store/products/slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectProductSearch } from "../../store/products/selectors";
import { Link } from "react-router-dom";
import {
  selectUserProfile,
  selectUserEmail,
} from "../../store/users/selectors";
import { selectToken } from "../../store/users/selectors";
import { logout } from "../../store/users/slice";

function NavBar() {
  const dispatch = useDispatch();
  const searchItem = useSelector(selectProductSearch);
  const userData = useSelector(selectUserProfile);
  const userEmail = useSelector(selectUserEmail);
  console.log("useEmailSelector::", userEmail);
  console.log("from Navbar::", userData);
  const [item, setItem] = useState("");
  const [heart, setHeart] = useState("empty");
  const token = useSelector(selectToken);
  //console.log("accesstoken::", token);
  //console.log("searchTerm:", searchTerm);
  console.log("ITEM:", item);
  dispatch(searchProduct(item));

  const userName = userData
    ? userData.find((user) => user.email === userEmail)?.name
    : null;

  console.log("const names::", userName);

  const searchClear = () => {
    setItem("");
  };

  const toggleHeart = () => {
    heart === "empty" ? setHeart("filled") : setHeart("empty");
    console.log("heart is:::", heart);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left-side">
        <div className="left-inner">
          <Link to="/">
            <div className="logo">
              Online
              <span className="logo-shop">Shop</span>
            </div>
          </Link>

          <div className="navbar-links">
            <div className="inner-link">
              <NavLink
                end
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "rgb(98, 0, 128)" }
                }
              >
                Home Page
              </NavLink>
            </div>
            <div className="inner-link">
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "rgb(98, 0, 128)" }
                }
              >
                About
              </NavLink>
            </div>
            <div className="inner-link">
              <NavLink
                to="/products/:id"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "rgb(98, 0, 128)" }
                }
              >
                Details
              </NavLink>
            </div>
          </div>
        </div>

        <div className="right-inner">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            ></input>
          </div>{" "}
          {!item ? (
            <button className="search-button">
              <FiSearch />
            </button>
          ) : (
            <button onClick={searchClear}>Clear</button>
          )}
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="welcome-message">
          <p className="user-name">
            {userName ? (
              <span className="user-logged-in">
                Welcome,{" "}
                <span className="user-name-highlighted">{userName} !</span>
              </span>
            ) : (
              <span className="user-looged-out">You're not logged in</span>
            )}
          </p>
        </div>
        <div className="right-icons">
          <h2>
            {!token ? (
              <Link className="link-icon" to="/login">
                <FiUser />
              </Link>
            ) : (
              <Link className="link-icon">
                <HiOutlineLogout onClick={() => dispatch(logout())} />
              </Link>
            )}
            {token ? (
              <Link className="link-icon-middle" to="/shopcart">
                <BiCartAlt />
              </Link>
            ) : (
              <Link className="link-icon-middle" to="/redirect">
                <BiCartAlt />
              </Link>
            )}{" "}
            <Link className="heart-div" onClick={toggleHeart}>
              {" "}
              {heart === "empty" ? (
                <BiHeart className="link-icon" />
              ) : (
                <BsSuitHeartFill className="filled-heart" />
              )}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
