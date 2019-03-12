import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StartScreen.css";
import chiligirl from "../../images/chiligirl1.png";
import unicorn from "../../images/unicorn2.png"


class StartScreen extends Component {
    componentDidMount(){
        this.props.newResults("unicorn");
        this.props.newResults("chiligirl");
        this.props.newResults("chilicorn");
    }
    render() {
        return(
            <div className="BGBox">
                <Link id="startBtn" to='/question/1'>
                    <div className="startBox">
                        <p id="areYou">ARE YOU A</p>
                        <p id="chiligirlStart">CHILIGIRL </p>
                        <p id="orA">OR A </p>
                        <p id="unicornStart"><span id="u" >U</span><span id="n1">N</span><span id="i">I</span><span id="c">C</span><span id="o">O</span><span id="r">R</span><span id="n2">N</span></p>
                    </div>
                </Link>
                <p class="speech1"><span id="chiliWords">Beans in chili are the worst!</span></p>
                <img id="chiligirlWave" src={chiligirl} alt="A waving chilgirl" />
                <p class="speech2"><span id="uniWords">Neigh!</span></p>
                <img id="unicornWave" src={unicorn} alt="A waving unicorn" />
            </div>
        )
    }
}
;
 
export default StartScreen; 