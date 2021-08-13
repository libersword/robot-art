import React, { Component } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { AdminRobotCard } from "../components/RobotCard";
import { getRobots } from "../utils/robot-actions";
import { DarkButton } from "./Login";

const Header = styled.h2`
  font-size: 60px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 24px;
`;

const PageWrapper = styled.div`
  margin: 0 100px 0 100px;
`;

const RobotsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .admin-button-wrapper {
    margin: 0 auto;
    left:0;
    right:0;
    position:absolute;
    bottom:24px;
    display:flex;
    width:90%;
  }
`;

const AddRobotForm = styled.div`
display: flex;
flex-direction:column;
background-color: #fff;
border: 1px solid #D8DAD8;
box-shadow: 0 0px 5px 0px #d8dad8;
width:397px;
height:519px;
border-radius:8px;
text-align:center;
position:relative;
margin:34px 24px 0 0;

.robot-name {
  text-transform:uppercase;
}

.form-group {
  width:90%;
  margin: 0 auto;
  margin-top:0;
}

#robotImg {
  height: 200px;
  background: #ECEEF0;
  border: 2px solid #737475;
  margin-top: 24px;
}

.cardImg img {
  width: 80%;
  margin: 0 auto;
  max-height:321px;
  max-width: 311px;
}
  h4 {
    margin-top: 40px;
    font-size: 22px;
  }
}
`

const ClearButton = styled.button`
background-color: transparent;
    border: none;
    height: 53px;
    color: #414142;
    text-decoration: underline;
    width: 40%;
`

class Results extends Component {
  state = {
    robots: [],
    votes: [],
    robotName: '',
    robotImg: '',
    disabled: true
  };

  componentDidMount() {
    getRobots().then((res) =>
      this.setState({
        robots: res.data,
      })
    );
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onUpload = () => {

  }

  onSubmit = () => {

  }

  editRobot = () => {
    
  };

  render() {
    const robots = this.state.robots;
    return (
      <div>
        <PageWrapper>
          <Header>Admin</Header>
        <RobotsWrapper>
          {console.log(robots)}
          <div class="add-robot">
          <AddRobotForm>
            <Form onSubmit={this.onSubmit}>
              <h4>ADD ROBOT</h4>
              <FormGroup>
              <Label for="robotName">Name</Label>
              
            <Input
                type="name"
                name="robotName"
                id="roboName"
                onChange={({ target }) => this.onChange(target.value)}
              />
              
              <Input 
              type="file" 
              name="robotImage" 
              id="robotImg"
              onChange={({target}) => this.onChange(target.value)}
              />
              </FormGroup>
              <div class="admin-button-wrapper">
                <ClearButton type="clear">Clear</ClearButton>
                <DarkButton type="submit" disabled={!this.state.robotName || !this.state.robotImg}>Add Robot</DarkButton>
              </div>
            </Form>
          </AddRobotForm>
          </div>
          
            {robots.map(({ id, name, url }) => (
              <AdminRobotCard
                key={id}
                image={url}
                name={name}
              />
            ))}
          </RobotsWrapper>
        </PageWrapper>
      </div>
    );
  }
}

export default Results;
