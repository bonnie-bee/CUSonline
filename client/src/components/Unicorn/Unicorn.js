import React, { Component } from "react";
import "./Unicorn.css";

class Unicorn extends Component {

    componentDidMount() {
        this.props.timer();
        this.props.updateResult("unicorn");
    }


 
    render() {

        return (
            <div id="uniBGDiv">
                <h1 id="uniHeader" className="resultHeader"><span id="uRes" >U</span><span id="n1Res">N</span><span id="iRes">I</span><span id="cRes">C</span><span id="oRes">O</span><span id="rRes">R</span><span id="n2Res">N</span></h1>
            </div>
        )
    }
}

export default Unicorn;