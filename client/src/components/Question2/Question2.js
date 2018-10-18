import React from "react";
import { Link } from "react-router-dom";
import "./Question2.css";

const Question2 = (props) => {

    return(
    <div className="BGBox">
        <p className="question" id="q2Text">Beans in chili?</p>
        <div id="ansSet1">
            <Link to='/question/3'><p className="ansQ2" id="nay" value="-2" onClick={props.questionValue} >Nay</p></Link>
            <Link to='/question/3'><p className="ansQ2" id="never" onClick={props.questionValue} value="2">Never</p></Link>
        </div>
    </div>
    )
};

export default Question2;