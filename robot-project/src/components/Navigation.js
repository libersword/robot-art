import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { NavbarToggler, Collapse } from 'reactstrap'
import styled from "styled-components";
import RobotLogoImg from "../components/assets/MR-Nav-logo.png";

const NavItem = styled.div`
  text-decoration: none;
  color: #414142;
  line-height: 80px;
  font-weight: 700;
  text-size: 18px;
  margin-right: 40px;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  background-color: #fff;
  height: 80px;
  box-shadow: 0 0 3px 0 #d8dad8;
  width: 100%;

  .right-side-links,
  .left-side-links {
    display: flex;
  }

  .right-side-links {
    margin-left: auto;
    margin-right: 100px;
  }
`;

const NavImg = styled.div`
  background-image: url(${RobotLogoImg});
  background-size: contain;
  height: 32px;
  width: 81px;
  background-repeat: no-repeat;
  margin-left: 100px;
  margin-top: 24px;
  margin-right: 56px;
`;

class Navigation extends Component {
  state = {
    isAuthenticated: false,
    isAdmin: false,
    user: "",
  };

  checkAuth = () => {
    let token = localStorage.getItem("token");
    let admin = localStorage.getItem("user");
    console.log(admin);
    if (token) {
      this.setState({
        isAuthenticated: true,
      });
    }
  };

  logoutHandler = (e) => {
    localStorage.clear();
    this.props.history.push("/");
  };

  onClick = (e) => {
    localStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("storage clear");
  };

  render() {
    const { isAuthenticated } = this.state.isAuthenticated;

    // const authLinks = (
    //   <Fragment>
    //     <div className="left-side-links">
    //       <NavItem>
    //         <Link to="/robots">Robots</Link>
    //       </NavItem>
    //       <NavItem>
    //         <Link to="/results">Results</Link>
    //       </NavItem>
    //     </div>
    //     <div className="right-side-links">
    //       <NavItem>
    //         <Link>Admin</Link>
    //       </NavItem>
    //       <NavItem>
    //         <Link to="/">Log Out</Link>
    //       </NavItem>
    //     </div>
    //   </Fragment>
    // );

    const loggedinLinks = (
      
      <Fragment>
        <div className="left-side-links">
          <NavItem>
            <Link to="/robots">Robots</Link>
          </NavItem>
          <NavItem>
            <Link
              to="/results"
            >
              Results
            </Link>
          </NavItem>
        </div>
        <div className="right-side-links">
          <NavItem onClick={this.onClick}>
            <Link to="/">Log Out</Link>
          </NavItem>
        </div>
      </Fragment>
    );

    const loggedOut = (
      <Fragment>
        <h2>Please Log In</h2>
        <Link to="/"></Link>
      </Fragment>
    );
    return (
      <div>
        <Navbar>
          <NavImg></NavImg>
          {isAuthenticated ? loggedOut : loggedinLinks}
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
