import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import LoginImg from "../components/assets/MR-Logo.png";
import styled from "styled-components";

const LoginLogo = styled.div`
  background-image: url(${LoginImg});
  height: 91px;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
`;

const RobotForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 607px;
  border: #d8dad8 1px solid;
  box-shadow: 0 0px 5px 0px #d8dad8;
  border-radius: 10px;
  margin: 100px auto;
  padding: 20px;
  text-align: center;
  padding: 80px 50px 90px 50px;
  background: #fff;
`;
const DarkButton = styled.button`
  height: 53px;
  color: #fff;
  font-weight: 700;
  background-color: #414142;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 16px;
  margin-right: 10px;
`;

const OutlinedButton = styled.button`
  height: 53px;
  color: #414142;
  border: 2px solid #414142;
  font-weight: 700;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  line-height: 53px;
  width: 100%;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  let history = useHistory();

  useEffect(() => {
    // handleLogout();
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser && loggedInUser !== "undefined") {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    let config = {};
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.defaults.headers.common = {
      "x-robot-art-api-key": "944ff2b8d944857910b45d18b750f3fe",
    };

    let token = await axios
      .post(
        "https://mondo-robot-art-api.herokuapp.com/auth/session",
        user,
        headers
      )
      .then((res) => res.data.token);

    config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const response = await axios
      .get("https://mondo-robot-art-api.herokuapp.com/auth/session", config)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
    localStorage.setItem("token", token);
    console.log(response);
    history.push("/robots");
  };

  // if(user){
  return (
    <div>
      <RobotForm>
        <div className="login-body">
          <LoginLogo></LoginLogo>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <DarkButton type="submit">Login</DarkButton>
              <Link to="/register">
                <OutlinedButton>Register</OutlinedButton>
              </Link>
            </FormGroup>
          </Form>
        </div>
      </RobotForm>
    </div>
  );
};

export { DarkButton, OutlinedButton, RobotForm, LoginLogo, Login };
