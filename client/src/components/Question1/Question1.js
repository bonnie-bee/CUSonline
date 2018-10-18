import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question1.css";
import ranch from "../../images/ranchHouse1.jpg";
import forest from "../../images/forest1b.jpg";
import barn from "../../images/barn1c.jpg";
import wagon from "../../images/chuck3.jpeg";

class Question1 extends Component {
    
    render() {
        
        return (
            <div className="BGBox">
                <p className="question">Where would you rather live?</p>
                <div id="ansSet1">
                    <Link to='/question/2'><img className="answer1" value="-1" id="ans1" onClick={this.props.questionValue} src={barn} alt="A ranch house" /></Link>
                    <Link to='/question/2'><img className="answer1" value="-2" id="ans2" onClick={this.props.questionValue} src={forest} alt="A forest with light shining through the trees" /></Link>
                </div>
                <div id="ansSet2">
                    <Link to='/question/2'><img className="answer1" value="2" id="ans3" onClick={this.props.questionValue} src={wagon} alt="A covered wagon" /></Link>
                    <Link to='/question/2'><img className="answer1" value="1" id="ans4" onClick={this.props.questionValue} src={ranch} alt="A barn" /></Link>
                </div>
            </div>
        )
    }

};

export default Question1;