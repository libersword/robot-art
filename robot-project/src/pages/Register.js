import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { RobotForm, LoginLogo, DarkButton, OutlinedButton } from "./Login";

const RegisterRobot = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  let history = useHistory();

  useEffect(() => {
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
    handleLogout();
    const user = { name, email, password };
    const body = { email, password };
    let config = {};
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.defaults.headers.common = {
      "x-robot-art-api-key": "944ff2b8d944857910b45d18b750f3fe",
    };

    await axios
      .post(
        "https://mondo-robot-art-api.herokuapp.com/auth/register",
        user,
        headers
      )
      .then((res) => console.log(res.status));

    let token = await axios
      .post(
        "https://mondo-robot-art-api.herokuapp.com/auth/session",
        body,
        headers
      )
      .then((res) => console.log(res.data.token));

    config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const response = await axios
      .get("https://mondo-robot-art-api.herokuapp.com/auth/session/", config)
      .then((res) => console.log(res.data))
      .then((res) => res.status)
      .catch((err) => console.log(err));

    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
    localStorage.setItem("token", token);
    console.log(response);
    //push to robots URL after successful register
    // history.push('/robots')
  };

  return (
    <div>
      <RobotForm>
        <div className="login-body">
          <LoginLogo></LoginLogo>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="full-name">Full Name</Label>
              <Input
                type="full-name"
                name="full-name"
                id="name"
                onChange={({ target }) => setName(target.value)}
              />
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
              <DarkButton type="submit">Register</DarkButton>
              <Link to="/">
                <OutlinedButton>Back to Login</OutlinedButton>
              </Link>
            </FormGroup>
          </Form>
        </div>
      </RobotForm>
    </div>
  );
};

export default RegisterRobot;
