import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";
import { BiCartAlt, BiHeart } from "react-icons/bi";
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

function NavBar() {
  const dispatch = useDispatch();
  const searchItem = useSelector(selectProductSearch);
  const userData = useSelector(selectUserProfile);
  const userEmail = useSelector(selectUserEmail);
  console.log("useEmailSelector::", userEmail);
  console.log("from Navbar::", userData);
  const [item, setItem] = useState("");
  //console.log("searchTerm:", searchTerm);
  console.log("ITEM:", item);
  dispatch(searchProduct(item));

  const userName = userData
    ? userData.find((user) => user.email === userEmail)?.name
    : null;

  console.log("const names::", userName);

  return (
    <div className="navbar-container">
      {/* <p>navbar container</p> */}
      <div className="navbar-left-side">
        {/* <p>navbar left side</p> */}
        <div className="left-inner">
          {/* <p>leftbar inner</p> */}
          <div className="logo">
            <span className="logo-online">Online</span>
            <span className="logo-shop">Shop</span>
          </div>
          <div className="navbar-links">
            <NavLink
              end
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Home Page
            </NavLink>{" "}
            {" ::::: "}{" "}
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              About
            </NavLink>{" "}
            {" ::::: "}{" "}
            <NavLink
              to="/products/:id"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Details
            </NavLink>
          </div>
        </div>

        <div className="right-inner">
          {/* <p>right inner</p> */}
          <input
            type="text"
            placeholder="Search..."
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></input>
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="welcome-message">
          <p>{userName ? `Welcome, ${userName}!` : "You're not logged"}</p>
        </div>
      </div>
      <div className="navbar-right-side">
        {/* <p>navbar right side</p> */}
        <h2>
          <Link to="/login">
            <FiUser />
          </Link>{" "}
          <Link to="/shopcart">
            <BiCartAlt />
          </Link>{" "}
          <BiHeart />
        </h2>
      </div>
    </div>
  );
}

export { NavBar };
