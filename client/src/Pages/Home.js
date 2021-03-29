import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "./home.css";

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
    <div>
      <div className="parallax text-center">
        <p id="text-jumbo">Rent My Ride</p>
        <div className="welcome-div">
          <p style={{ color: "white" }}>
            Grab a ride here, so you can get around quick out there.
          </p>
        </div>
      </div>
      <div className="btn-div">
        <button onClick={handleRentClick} className="btn btn-dark">
          Rent
        </button>
        <br></br>
        <button onClick={handleReturnClick} className="btn btn-dark">
          Return
        </button>
      </div>
    </div>
  );
};

export default Home;
