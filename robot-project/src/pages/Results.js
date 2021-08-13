import React, { Component } from "react";
import styled from "styled-components";
import { ResultsRobotCard } from "../components/RobotCard";
import { getRobots, getVotes } from "../utils/robot-actions";

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
  margin: 0 auto;
`;

class Results extends Component {
  state = {
    robots: [],
    votes: []
  };

  componentDidMount() {
    getRobots().then((res) =>
      this.setState({
        robots: res.data,
      })
    );
  }

  robotVotes = () => {
    const votes = [];
    this.state.robots.forEach((id) => {
      votes.push(
        getVotes(id).then((res) => {
          console.log(res.data)
          .then((res) => this.setState({
            votes: res.data
          }));
        })
      );
      console.log(votes)
    });
  };

  render() {
    const robots = this.state.robots;
    return (
      <div>
        <PageWrapper>
          {console.log(robots)}
          <Header>Robots</Header>
          <RobotsWrapper>
            {robots.map(({ id, name, url }) => (
              <ResultsRobotCard
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
