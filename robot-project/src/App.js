import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import {Login} from "./pages/Login";
import Register from "./pages/Register";
import Robots from "./pages/Robots";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Switch>
      <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Navigation />
          <Route exact path="/robots" component={Robots} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
