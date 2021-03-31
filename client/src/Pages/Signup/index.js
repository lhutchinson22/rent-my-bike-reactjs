import React, { useState, useContext } from "react";
import Container from "../../Components/Container";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./signup.css";
import UserContext from "../../Context/UserContext";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userPost = await axios.post("/api/users", {
        email,
        password,
        displayName,
      });
      localStorage.setItem("auth-token", userPost.data._id);
      setUserData({ userId: userPost.data._id });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
        <h2
          style={{
            color: "white",
            margin: "auto",
            paddingBottom: "10px",
            fontSize: "62px",
            opacity: ".5",
          }}
        >
          Sign Up
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

          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="Displayname"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Col>
          </Row>
          <br></br>

          <button className="btn btn-success" id="signupbtn" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
