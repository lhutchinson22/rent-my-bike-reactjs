import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Rented = () => {
  const { userData } = useContext(UserContext);

  const [rented, setRented] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [checkRented, setCheckRented] = useState(false);

  const getTransactions = async function () {
    try {
      const transactions = await axios.get(
        `/api/transaction/rented/${userData.userId}`
      );
      setRented(transactions.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBikes = async function () {
    try {
      let tempBikes = [];
      for (let i = 0; i < rented.length; i++) {
        const bike = await axios.get(`/api/bikes/id/${rented[i].bikeId}`);
        tempBikes.push(bike.data[0]);
      }
      setBikes(tempBikes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReturn = async function (e) {
    const bikeAttributes = e.target.getAttribute("data-bike");
    console.log(bikeAttributes);
    try {
      rentHelper(bikeAttributes);
      setCheckRented(true);
    } catch (err) {
      console.log(err);
    }
  };

  const rentHelper = async function (returnBike) {
    try {
      const setRented = await axios.put(`/api/bikes/${returnBike}`, {
        rented: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    getTransactions();
    getBikes();
  }, [rented.length]);

  return (
    <div>
      {bikes.map((bike, index) => (
        <div key={index} className="card mt-2 mb-2" id="Rent-card">
          <div className="card-header">{bike.model}</div>
          <div className="card-body">
            <p className="card-text">Location: {bike.zip}</p>
            <p className="card-text">Price: {bike.price}</p>
            <p className="card-text">Color: {bike.color}</p>
            <p className="card-text">Num Wheels: {bike.wheels}</p>
            <button
              data-bike={bike._id}
              data-owner={bike.ownerId}
              onClick={(e) => handleReturn(e)}
              className="btn btn-outline-primary"
            >
              Return Bike!
            </button>
            {checkRented && (
              <p style={{ textAlign: "center" }}>Bike Returned!</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rented;
