import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Owned = () => {

  const { userData } = useContext(UserContext);
  const [owned, setOwned] = useState([]);
  const [bikes, setBikes] = useState([]);

  const getTransactions = async function () {
    try {
      const transactions = await axios.get(`/api/transaction/owned/${userData.userId}`);
      setOwned(transactions.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBikes = async function () {
    try {
      let tempBikes = [];
      for (let i = 0; i < owned.length; i++) {
        const bike = await axios.get(`/api/bikes/id/${owned[i].bikeId}`);
        tempBikes.push(bike.data[0]);
      }
      setBikes(tempBikes);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(async () => {
    getTransactions();
    getBikes();
  }, [owned.length]);

  return (
    <div>
      {bikes.map((bike, index) => (
        <div key={index} className="card mt-2 mb-2" id="Owned-card">
          <div className="card-header">{bike.model}</div>
          <div className="card-body">
            <p className="card-text">Location: {bike.zip}</p>
            <p className="card-text">Price: {bike.price}</p>
            <p className="card-text">Color: {bike.color}</p>
            <p className="card-text">Num Wheels: {bike.wheels}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Owned;
