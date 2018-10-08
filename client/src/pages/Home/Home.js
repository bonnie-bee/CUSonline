import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import StartScreen from "../../components/StartScreen";
import Question1 from "../../components/Question1";
import Question2 from "../../components/Question2";
import Question3 from "../../components/Question3";
import Question4 from "../../components/Question4";
import Question5 from "../../components/Question5";
import NoMatch from "../../components/NoMatch";
import Chilicorn from "../../components/Chilicorn"



class Home extends Component {

    questionValue = (e) => {
        let amounts = parseInt(e.target.getAttribute("value"), 10);
        this.props.data.editState(amounts);
        console.log(amounts)
    }

    finalValue = (e) => {
        let amounts = parseInt(e.target.getAttribute("value"), 10);
        this.props.data.finalTotal(amounts);        
    }

    


    render() {
        return (
            <Router>
                
            </Router>
        )
    }

};

export default Home;
