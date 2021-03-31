import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../Components/Container";
import Col from "../Components/Col";
import Row from "../Components/Row";
import axios from "axios";
import UserContext from "../Context/UserContext";
import "./login.css";
import bcrypt from "bcryptjs";

import "../Pages/login.css";

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.get(`/api/users/email/${email}`);
      if (bcrypt.compareSync(password, user.data.password)) {
        localStorage.setItem("auth-token", user.data._id);
        setUserData({ userId: user.data._id });
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{ marginTop: "100px" }}
      >
        <h2
          style={{
            color: "white",
            margin: "auto",
            paddingBottom: "10px",
            fontSize: "62px",
            opacity: ".5",
          }}
        >
          Login
        </h2>

        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>

          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>

          <button className="btn btn-success" id="loginbtn" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
};

export default Login;
