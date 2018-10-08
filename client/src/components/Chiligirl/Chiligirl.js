import React, { Component } from "react";
import "./Chiligirl.css";

class Chiligirl extends Component{
    render(){
        this.props.timer();
        return(
            <h1 className="resultHeader">I'M A CHILIGIRL</h1>
        )
    }
} 

export default Chiligirl;