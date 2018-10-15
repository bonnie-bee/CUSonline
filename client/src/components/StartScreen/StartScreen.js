import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StartScreen.css";

class StartScreen extends Component {
    render() {
        this.props.newResults("unicorn");
        this.props.newResults("chiligirl");
        this.props.newResults("chilicorn");
        return(
            <div className="BGBox">
                <Link id="startBtn" to='/question/1'>
                    <div className="startBox">
                        <p className="startText">ARE YOU A</p>
                        <p className="startText">CHILIGIRL OR A <span id="u" >U</span><span id="n1">N</span><span id="i">I</span><span id="c">C</span><span id="o">O</span><span id="r">R</span><span id="n2">N</span></p>
                    </div>
                </Link>
            </div>
        )
    }
}
;

export default StartScreen; 