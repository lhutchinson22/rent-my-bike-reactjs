import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import "./listing.css";

const Listings = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  const [bikes, setBikes] = useState([]);
  const [options, setOptions] = useState([]);
  const [transaction, setTransaction] = useState({
    ownerId: "",
    renterId: "",
    bikeId: "",
  });

  const checkLogin = function () {
    try {
      const login = localStorage.getItem("auth-token");
      if (login === "" || login !== userData.userId) {
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Data to display
  useEffect(async () => {
    checkLogin();
    optionData();
    allBikeData();
  }, []);

  // api request for all bikes
  const allBikeData = async function () {
    try {
      const allBikes = await axios.get("/api/bikes");
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // api request for option menu of bikes called useEffect
  const optionData = async function () {
    try {
      const optionList = await axios.get("/api/bikes");
      console.log(optionList);
      setOptions(optionList.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Listings Page Styling
  const listingsStyles = {
    btnGroup: {
      margin: "30px auto 10px auto",
    },

    listingsBtn: {
      width: "150px",
      marginLeft: "10px",
    },
  };

  // Functions for filtering bike data
  const handleAll = async () => {
    try {
      const allBikes = await axios.get("/api/bikes");
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  //handling model selection
  const handleModel = async function (e) {
    let modelSelection = e.target.id;

    try {
      const allBikes = await axios.get(`/api/bikes/${modelSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  //handling zip selection
  const handleZip = async function (e) {
    let zipSelection = e.target.id;
    console.log(zipSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/zip/${zipSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  //handling price selection
  const handlePrice = async function (e) {
    let minPrice = 0;
    let maxPrice = 1000000;

    if (e.target.id == "<=5") {
      maxPrice = 5;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    } else if (e.target.id == "<=10") {
      maxPrice = 10;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    } else if (e.target.id == "<=15") {
      maxPrice = 15;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    } else if (e.target.id == "<=20") {
      maxPrice = 20;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    } else if (e.target.id == "<=25") {
      maxPrice = 25;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    } else {
      maxPrice = 1000000;
      console.log(`min: ${minPrice}, max: ${maxPrice}`);
    }
    try {
      const allBikes = await axios.get(`/api/bikes/price/${maxPrice}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  //handling wheels selection
  const handleWheels = async function (e) {
    let wheelSelection = e.target.id;
    console.log(wheelSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/wheels/${wheelSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  //handling color selection
  const handleColor = async function (e) {
    let colorSelection = e.target.id;
    console.log(colorSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/color/${colorSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRent = async function (e) {
    let path = "/account";

    const trans = {
      bikeId: e.target.getAttribute("data-bike"),
      ownerId: e.target.getAttribute("data-owner"),
      renterId: userData.userId,
    };
    setTransaction(trans);

    try {
      const newTransaction = await axios.post("/api/transaction", trans);
      console.log(newTransaction);
      rentHelper(trans.bikeId);
      history.push(path);
    } catch (error) {
      console.log(error);
    }
  };

  const rentHelper = async function (bikeId) {
    try {
      const setRented = await axios.put(`/api/bikes/${bikeId}`, {
        rented: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" id="listingContainer">
      <h2
        style={{
          color: "white",
          paddingBottom: "10px",
          fontSize: "62px",
          opacity: ".5",
          marginLeft: "50%",
        }}
      >
        Listings
        </h2>

      <h3
        style={{
          color: "white",
          margin: "auto",
          paddingBottom: "5px",
          fontSize: "36px",
          opacity: ".5",
          marginLeft: "50%",
        }}
      >
        Filter Listings By</h3>

      <div className="btn-group" style={listingsStyles.btnGroup}>
        <button
          onClick={() => handleAll()}
          type="button"
          className="btn btn-outline-secondary"
          style={listingsStyles.listingsBtn}
        >
          All Bikes
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Models
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.model}
                onClick={(e) => handleModel(e)}
                className="dropdown-item"
                href="#"
              >
                {options.model}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Location
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.zip}
                onClick={(e) => handleZip(e)}
                className="dropdown-item"
                href="#"
              >
                {options.zip}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Price
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="<=5"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#60; $5/hr
            </a>
          </li>
          <li>
            <a
              id="<=10"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#60; $10/hr
            </a>
          </li>
          <li>
            <a
              id="<=15"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#60; $15/hr
            </a>
          </li>
          <li>
            <a
              id="<=20"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#60; $20/hr
            </a>
          </li>
          <li>
            <a
              id="<=25"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#60; $25/hr
            </a>
          </li>
          <li>
            <a
              id=">=26"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              &#62; $26/hr
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Color
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.color}
                onClick={(e) => handleColor(e)}
                className="dropdown-item"
                href="#"
              >
                {options.color}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Num. Wheels
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="1"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              id="2"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              id="3"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              id="4"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              4
            </a>
          </li>
          <li>
            <a
              id="5"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              5+
            </a>
          </li>
        </ul>
      </div>

      <div>
        {bikes.map((bike) => (
          <div className="card mt-2 mb-2">
            <div className="card-header">{bike.model}</div>
            <div className="card-body">
              <p className="card-text">Location: {bike.zip}</p>
              <p className="card-text">Price: {bike.price}</p>
              <p className="card-text">Color: {bike.color}</p>
              <p className="card-text">Num Wheels: {bike.wheels}</p>
              <button
                data-bike={bike._id}
                data-owner={bike.ownerId}
                onClick={(e) => handleRent(e)}
                className="btn btn-outline-primary"
              >
                Rent Bike!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
