import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moment from "moment";
import API from "./utils/API";
import Chilicorn from "./components/Chilicorn";
import Chiligirl from "./components/Chiligirl";
import Unicorn from "./components/Unicorn";
import StartScreen from "./components/StartScreen";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Result from "./pages/Result"
import NoMatch from "./components/NoMatch";



class App extends Component {

  //setting up state and binding functions to it because extended component instead of arrow functions
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      result: "",
      //currentDay wil be an array with each type and the amount of them 
      currentDay: []
    }

    this.editState = this.editState.bind(this);
    this.finalResult = this.finalResult.bind(this);
    this.getResults = this.getResults.bind(this);
  };

  //updates the state with the answer values of the answer the user picked
  //takes the element the user clicked as an argument so can pass in its value attribute
  editState(e) {
    let stateTotal = this.state.total;
    let amounts = parseInt(e.target.getAttribute("value"), 10);
    let newTotal = amounts + stateTotal;
    this.setState({ total: newTotal });
    return newTotal;
  }

  //finding out what type the user is 
  finalResult(e) {
    let newTotal = this.editState(e);
    console.log("new total: " + newTotal)
    let result = "";
    //if the total score of all answers is less than 0, you're a chiligirl
    if (newTotal > 0) {
      result = "Chiligirl";
      this.setState({ total: newTotal, result: result });
      //redirect to the chiligirl result screen
      window.location.assign("/result/Chiligirl")
    }
    //if the total score of all answers is more than 0, you're a unicorn
    if (newTotal < 0) {
      result = "Unicorn";
      this.setState({ total: newTotal, result: result });
      //redirect to the unicorn result screen
      window.location.assign("/result/Unicorn")
    }
    //if the total score of all answers is equal to 0, you're a chilicorn
    if (newTotal === 0) {
      result = "Chilicorn";
      this.setState({ total: newTotal, result: result });
      //redirect to the chilicorn result screen
      window.location.assign("/result/Chilicorn")
    }
  }

  //timer function to rest the game after the user sees their result
  //redirects to the start screen and resets state after 7 seconds
  timer() {
    setTimeout(function () {
      window.location.assign("/");
      let total = 0;
      let result = "";
      this.setState({ total: total, result: result })
    }, 7000)
  }

  //create a document in the database at the start of each day
  newResults() {
    let today = moment().format("MMM Do YY");
    API.saveResult({
      //give each type an id for mapping later
      resultType: [{ id: 1, name: "chiligirl", amount: 0 }, { id: 2, name: "unicorn", amount: 0 }, { id: 3, name: "chilicorn", amount: 0 }],
      date: today
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  //take the passed in result type and look for it in the database
  //update the amount of that type 
  updateResult = (resultType) => {
    let today = (moment().format("MMM Do YY"));
    API.updateResult({
      resultType: resultType,
      date: today
    })
      .then(res => this.getResults())
      .catch(err => console.log(err));
  }

  //show the results from today on the result screen and pass to the lcd screen
  getResults = () => {
    API.getResults()
      .then(res => {
        let today = res.data.length - 1;
        let currentResult = res.data[today].resultType
        this.setState({ currentDay: currentResult })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Router> 
        <Switch>
          <Route exact path="/" render={(props) => (
            <StartScreen {...props} newResults={this.newResults} />
          )} />
          <Route exact path="/question/1" render={(props) => (
            <Question1 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/2" render={(props) => (
            <Question2 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/3" render={(props) => (
            <Question3 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/4" render={(props) => (
            <Question4 {...props} questionValue={this.editState} />
          )} />
          <Route exact path="/question/5" render={(props) => (
            <Question5 {...props} finalValue={this.finalResult} />
          )} />
          <Route exact path="/result/chiligirl" render={(props) => (
            <Chiligirl {...props} timer={this.timer}  updateResult={this.updateResult} />
          )} />
          <Route exact path="/result/unicorn" render={(props) => (
            <Unicorn {...props} timer={this.timer}  updateResult={this.updateResult}/>
          )} />
          <Route exact path="/result/chilicorn" render={(props) => (
            <Chilicorn {...props} timer={this.timer}  updateResult={this.updateResult} />
          )} />
          <Route exact path="/result" render={(props) => (
            <Result {...props} getResults={this.getResults} result={this.state.currentDay} />
          )} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
    )
  }
};

export default App;
