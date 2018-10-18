import React, { Component } from "react";
import "./Chiligirl.css";
import chili from "../../images/chiliPot.png"

class Chiligirl extends Component {

    componentDidMount() {
        this.props.timer(); 
        this.props.updateResult("chiligirl");
    }
    render() {

        return (
            <div id="girlBGDiv">
                <img id="chili1" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili2" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili4" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili5" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili6" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili7" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili8" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili9" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili10" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili11" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili12" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili13" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili14" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili15" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili16" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili17" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili18" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili19" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili20" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili21" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili22" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili23" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili24" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili25" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili26" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili27" className="chilipots" src={chili} alt="chilipot" />
                <img id="chili28" className="chilipots" src={chili} alt="chilipot" />
                <h1 id="girlHeader" className="resultHeader">Chiligirl</h1>
                

            </div>
        )
    } 
}

export default Chiligirl;