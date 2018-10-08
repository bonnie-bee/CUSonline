import React from "react";
import { Link } from "react-router-dom";
import "./Question4.css";

const Question4 = (props) => {
    // let thing1 = props.data.hello;

    return (
        <div className="BGBox">
            <p className="question" id="q4Text">What's your role on the chili team?</p>
            <div id="ansSet4a">
                <Link to='/question/5'><p className="ansQ4" value="2" onClick={props.questionValue} id="q4a1">Cook</p></Link>
                <Link to='/question/5'><p className="ansQ4 leftSide" value="0" onClick={props.questionValue} id="q4a2">Taster</p></Link>
                <Link to='/question/5'><p className="ansQ4 leftSide" value="-2" onClick={props.questionValue} id="q4a3">Mascot</p></Link>
            </div>
            <div id="ansSet4b">
                <Link to='/question/5'><p className="ansQ4" value="-1" onClick={props.questionValue} id="q4a4">Decorator</p></Link>
                <Link to='/question/5'><p className="ansQ4 leftSide" value="1" onClick={props.questionValue} id="q4a5">Captain</p></Link>
            </div>
        </div>
    )
};

export default Question4;