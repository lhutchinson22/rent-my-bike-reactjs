import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import "./post.css";

const Post = () => {
  const { userData } = useContext(UserContext);
  const [form, setForm] = useState({
    model: "",
    zip: -1,
    price: -1,
    color: "",
    wheels: -1,
    ownerId: "",
  });
  const history = useHistory();

  const checkLogin = function () {
    try {
      const login = localStorage.getItem("auth-token");
      if (login === "" || login !== userData.userId) {
        history.push("/login")
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    let path = "/listings";

    try {
      const newPost = await axios.post("/api/bikes", form);
      console.log(newPost);
      history.push(path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkLogin();
    setForm({ ...form, ownerId: userData.userId });
  }, []);

  return (
    <div style={{ color: "grey" }}>
      <div className="jumbotron">
        <h2
          style={{
            color: "white",
            marginTop: "5%",
            paddingBottom: "10px",
            fontSize: "62px",
            opacity: ".5",
            marginLeft: "16%",
          }}
        >
          Post A New Bike
        </h2>
      </div>
      <div className="container" id="postContainer">
        <form onSubmit={submitPost}>
          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              onChange={onChange}
              type="text"
              name="model"
            />
          </div>
          <div className="form-group">
            <label>Zip</label>
            <input
              className="form-control"
              onChange={onChange}
              type="number"
              name="zip"
            />
          </div>
          <div className="form-group">
            <label>Price/h</label>
            <input
              className="form-control"
              onChange={onChange}
              type="number"
              name="price"
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              onChange={onChange}
              type="text"
              name="color"
            />
          </div>

          <div className="form-group">
            <label># of Wheels</label>
            <div className="input-group mb-3 form-control">

              <select className="custom-select form-control" id="inputGroupSelect01" onChange={onChange} name="wheels">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-secondary">
            Post My Bike
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
