import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "./home.css";
import map from "./nyc.png";
import bikereturn from "./bike.png";

const Home = () => {
  const history = useHistory();
  const { userData } = useContext(UserContext);

  const handleRentClick = () => {
    let path;
    try {
      const loggedIn = localStorage.getItem("auth-token");
      if (loggedIn === userData.userId && loggedIn !== "") {
        path = "/listings";
      } else {
        path = "/signup";
      }
    } catch (err) {
      console.log(err);
    }
    history.push(path);
  };

  const handleReturnClick = () => {
    let path;
    try {
      const loggedIn = localStorage.getItem("auth-token");
      if (loggedIn === userData.userId && loggedIn !== "") {
        path = "/account";
      } else {
        path = "/signup";
      }
    } catch (err) {
      console.log(err);
    }
    history.push(path);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="parallax text-center">
        <p id="text-jumbo">Rent My Ride</p>
        <div className="welcome-div">
          <p style={{ color: "white" }}>
            Grab a ride here, so you can get around quick out there.
          </p>
        </div>
      </div>
      <div className="btn-div">
        <div className="row" style={{ margin: "100px" }}>
          <p
            style={{
              color: "white",
              marginTop: "375px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Welcome to Rent My Ride! We make it easy to rent bikes so that you
            can get where you need to go quicker. Simply click the rent button
            below to get signed up and rent a bike today. Have a bike you'd like
            to be rented out? We make it easy to post your own bike to the
            public listings page. Be sure to let us know when the bike is
            returned, and rent a new listing whenever you need to catch a ride.
          </p>
          <div className="col-md-6">
            <img
              src={map}
              style={{
                width: "400px",
                margin: "auto",
                display: "block",
                textAlign: "center",
              }}
            />
            <button onClick={handleRentClick} className="btn btn-dark">
              Rent
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={bikereturn}
              style={{
                width: "400px",
                height: "250px",
                margin: "auto",
                display: "block",
                textAlign: "center",
              }}
            />
            <button onClick={handleReturnClick} className="btn btn-dark">
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
