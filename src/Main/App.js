import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing.js";
import pastEvents from "../Components/PastEvents/PastEvents.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pastEvents" exact component={pastEvents} />
          <Route path="/" exact component={Landing} />
          {/* Finally, catch all unmatched routes */}
          {/*  <Route component={NotFound} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
