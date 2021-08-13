import React, { Component } from "react";
import styled from "styled-components";
import { RobotCard } from "../components/RobotCard";
import {
  getRobots,
  castVote,
  deleteVote
} from "../utils/robot-actions";

const Header = styled.h2`
  font-size: 60px;
  margin-left: 24px;
`;

const PageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const RobotsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Robots extends Component {
  state = {
    robots: [],
    voted: false,
    voteID: " ",
    voteRobot: " ",
    votes: [],
  };

  componentDidMount() {
    getRobots().then((res) =>
      this.setState({
        robots: res.data,
      })
    );
  }

  myVote = async (id) => {
    if (localStorage.getItem("vote") === " "){
      this.setState({
        voted:false
      })
    }
    console.log(this.state.voted)
    if (this.state.voted === false) {
      console.log("Welcome, first time voter")
      castVote(id).then((res) => {
        this.setState({
          voteID: res.data.id,
          voteRobot: JSON.stringify(res.data.robot),
          voted: true,
        });
        console.log("Vote logged " + this.state.voteID);
        console.log("Robot Picked:  " + this.state.voteRobot + ". Nice");
        localStorage.setItem("vote", this.state.voteID)
      });
    }
    if (this.state.voted === true) {
      console.log("Deleting Current vote: " + this.state.voteID);
      localStorage.removeItem("vote");
      await deleteVote(this.state.voteID).then((res) =>
        console.log("Vote Deleted: " + res.status)
      );
      this.setState({
        voted: false
      })
      await castVote(id).then((res) => {
        this.setState({
          voteID: res.data.id,
          voteRobot: JSON.stringify(res.data.robot)
        })
        localStorage.setItem("vote", this.state.voteID);
        console.log("Casting New Vote: " + this.state.voteID);
        console.log("Robot Picked:  " + this.state.voteRobot + ". Nice");
      });
    }
  };

  render() {
    const robots = this.state.robots;
    return (
      <div>
        <PageWrapper>
          <Header>Robots</Header>
          <RobotsWrapper>
            {robots.map(({ id, name, url }) => (
              <RobotCard
                key={id}
                image={url}
                name={name}
                vote={this.myVote.bind(this, id)}
              />
            ))}
          </RobotsWrapper>
        </PageWrapper>
      </div>
    );
  }
}

export default Robots;
