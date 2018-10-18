import React from "react";
import { Link } from "react-router-dom";
import "./Question3.css";
import chili1 from "../../images/chili1.jpg";
import chili2 from "../../images/chili4.jpg";
import chili3 from "../../images/chili5.JPG";

const Question3 = (props) => {

    return (
        <div className="BGBox">
            <p className="question" id="q3Text">Which chili do you want?</p>
            <Link to='/question/4'><img className="answer3" value="0" id="chiliPic1" src={chili1} onClick={props.questionValue} alt="A ranch house" /></Link>
            <Link to='/question/4'><img className="answer3" value="1" id="chiliPic2" src={chili2} onClick={props.questionValue} alt="A forest with light shining through the trees" /></Link>
            <Link to='/question/4'><img className="answer3" value="-1" id="chiliPic3" src={chili3} onClick={props.questionValue} alt="A covered wagon" /></Link>
        </div>
    );

};

export default Question3;