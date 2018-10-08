import React, { Component } from "react";
import "./Chilicorn.css";

class Chilicorn extends Component{
    render(){
        this.props.timer()
        return(
    <h1 className="resultHeader">I'M A CHILICORN</h1>
)
        }
    }

export default Chilicorn;