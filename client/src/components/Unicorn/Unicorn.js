import React, { Component } from "react";
import "./Unicorn.css";

class Unicorn extends Component {
    render(){
        this.props.timer()

        return (
            <h1 className="resultHeader">I'M A UNICORN</h1>

        )
    }
}

export default Unicorn;