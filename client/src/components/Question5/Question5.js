import React from "react";
// import { Link } from "react-router-dom";
import "./Question5.css";
import chiligirl from "./images/chiligirl.jpg";
import unicorn from "./images/unicorn5.jpeg";

const Question5 = (props) => {
    console.log(props)
    return (
        <div className="BGBox">
            <p className="question" id="q5Text">Who's your best friend?</p>
            <img className="answer5" value="2" id="corn" src={unicorn} onClick={props.finalValue} alt="A forest with light shining through the trees" />
            <img className="answer5" value="-2" id="girl" src={chiligirl} onClick={props.finalValue} alt="A ranch house" />
        </div>

    )
};

export default Question5;