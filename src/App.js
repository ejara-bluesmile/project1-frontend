import React from "react";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import BackLogin from "./components/login/backgroun.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Issues from "./components/issues/issues";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <div className="login">
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/issues" component={Issues}></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
