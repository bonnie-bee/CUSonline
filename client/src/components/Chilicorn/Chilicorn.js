import React, { Component } from "react";
import "./Chilicorn.css";

class Chilicorn extends Component {
 

    componentDidMount() {
        this.props.timer();
        this.props.updateResult("chilicorn");
    };

    render() {

        return (
            <div id="cornBGDiv">
                <h1 id="cornHeader" className="resultHeader">I'M A CHILICORN</h1>
            </div>
        )
    }
}

export default Chilicorn;