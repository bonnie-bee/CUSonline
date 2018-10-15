import React, { Component } from "react";
import "./Result.css";

class Result extends Component {

    componentDidMount() {
        this.props.getResults()
    }

    render() {

        return (
            <div>
                <h1>HERE ARE THE RESULTS FOR TODAY</h1>
                <ul>
                    {this.props.result.map(result => (
                        <li key={result.id}>
                            {result.name} : {result.amount}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default Result;