import React, { Component } from "react";
import "./Chiligirl.css";

class Chiligirl extends Component {

    componentDidMount() {
        this.props.timer(); 
        this.props.updateResult("chiligirl");
    }
    render() {

        return (
            <div id="girlBGDiv">
                <h1 id="girlHeader" className="resultHeader">I'M A CHILIGIRL</h1>
            </div>
        )
    }
}

export default Chiligirl;