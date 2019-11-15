import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing.js";
import pastEvents from "../Components/PastEvents/PastEvents.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/pastEvents" component={pastEvents} />
            {/* Finally, catch all unmatched routes */}
            {/*  <Route component={NotFound} />*/}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
