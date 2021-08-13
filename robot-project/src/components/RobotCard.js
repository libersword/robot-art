import React, {useState} from "react";
import styled from "styled-components";
import { DarkButton, OutlinedButton } from "../pages/Login";

const Card = styled.div`
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

.cardImg img {
  width: 80%;
  margin: 0 auto;
  max-height:321px;
  max-width: 311px;
}

.button-wrapper {
  width: 150px;
  margin: 0 auto;
  left:0;
  right:0;
  position:absolute;
  bottom:24px;
  display:flex;
}

  h4 {
    margin-top: 40px;
    font-size: 22px;
  }
}
    
}
`;

export const RobotCard = (props) => {
  return (
    <div>
      <Card>
        <h4 className="robot-name">{props.name}</h4>
        <div className="cardImg"><img src={props.image} alt={props.name} /></div>
        <div className="button-wrapper" >
        <DarkButton
        onClick = {props.vote}
        >Vote</DarkButton>
        </div>
      </Card>
    </div>
  );
};
export const ResultsRobotCard = (props) => {
  return (
    <div>
      <Card>
        <h4 className="robot-name">{props.name}</h4>
        <div className="cardImg"><img src={props.image} alt={props.name} /></div>
        <div className="button-wrapper">
        <div className="tally-number"></div>   
        </div>
      </Card>
    </div>
  );
};
export const AdminRobotCard = (props) => {
  return (
    <div>
      <Card>
        <h4 className="robot-name">{props.name}</h4>
        <div className="cardImg"><img src={props.image} alt={props.name} /></div>
        <div className="admin-button-wrapper">
        <DarkButton
        onClick = {props.edit}
        >Edit</DarkButton>
        <OutlinedButton
        onClick = {props.edit}
        >Delete</OutlinedButton>
        </div>
      </Card>
    </div>
  );
};


