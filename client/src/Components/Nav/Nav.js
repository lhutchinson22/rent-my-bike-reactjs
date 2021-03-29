import React from "react";
import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navi = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Link to={"/"} style={{ textDecoration: 'none' }}>Home</Link>  */}
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link " to="/listings">
                Listings
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto ">
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/post">
              Post
            </Link>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                to="/account"
              >
                My Account
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/account">
                  Settings
                </Link>
                <Link className="dropdown-item" to="/account">
                  Rented
                </Link>
                <Link className="dropdown-item" to="/account">
                  Owned
                </Link>
                <Link className="dropdown-item" to="/account">
                  Log Out
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* <Link to={"/listings"}>Listings</Link> 
        <Link to={"/post"}>Post</Link>  */}
      </nav>
    </div>
  );
};

export default Navi;
