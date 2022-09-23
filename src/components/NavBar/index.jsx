import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";
import { BiCartAlt, BiHeart } from "react-icons/bi";

function NavBar() {
  return (
    <div className="navbar-container">
      {/* <p>navbar container</p> */}
      <div className="navbar-left-side">
        {/* <p>navbar left side</p> */}
        <div className="left-inner">
          {/* <p>leftbar inner</p> */}
          <NavLink
            to="/homepage/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home Page
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="/detailsPage"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Details
          </NavLink>
        </div>

        <div className="right-inner">
          {/* <p>right inner</p> */}
          <input type="text" />

          <button>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="navbar-right-side">
        {/* <p>navbar right side</p> */}
        <h2>
          <FiUser />
          <BiCartAlt />
          <BiHeart />
        </h2>
      </div>
    </div>
  );
}

export { NavBar };
