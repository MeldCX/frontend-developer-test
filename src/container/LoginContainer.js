import React, { useState } from "react";
import { Input, Button } from "../components/Components";
import GenerateToken from "../methods/generateToken";
import axios from "axios";
import { Redirect } from "react-router";

const errorMessage = <div><br /><strong style={{ color: "red" }}>Please try again!</strong></div>

export default function LoginContainer({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const session = localStorage.getItem("meldcx_token")
  const url = "http://35.201.2.209:8000";

  const getEmail = (e) => setEmail(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);
  const onLogging = () => {
    axios
      .post(`${url}/login`, {
        email: email,
        password: password
      })
      .then((res) => {
        const token = res.data;
        localStorage.setItem("meldcx_token", token)
        history.push('/panel')
      })
      .catch((e) => {
        setError(true);
      });
  };

  if (session === null) {
    return (
      <div className="loginDiv">
        <h1 id="header">Login</h1>
        <Input
          onChange={getEmail}
          placeholder="Email Address"
          icon="envelope"
          type="email"
        />
        <Input
          onChange={getPassword}
          placeholder="Password"
          icon="password"
          type="password"
        />
  
        <Button
          onClick={onLogging}
          className="loginButton"
          buttonLabel="LOG IN"
          id="loginBtn"
          style={styles.button}
        />
  
        {error && errorMessage}
      </div>
    );
  }

  return(
    <Redirect from='/' to='/panel' />
  )
}

const styles = {
  button: {},

  input: {
    position: "relative",
    marginBottom: -30
  }
};
