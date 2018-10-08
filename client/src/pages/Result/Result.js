import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./Result.css";
import Chiligirl from "../../components/Chiligirl";
import Chilicorn from "../../components/Chilicorn";
import Unicorn from "../../components/Unicorn";

class Result extends Component {
    render() {
    console.log(this.props)

    

        return (
            <h1>HERE ARE THE RESULTS FOR TODAY</h1>
        )
    }
};

export default Result;