import React from "react";
<<<<<<< HEAD
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import BackLogin from "./components/login/backgroun.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <div className="login">
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
=======
import IssuesForm from "./components/issues/issuesForm";

function App() {
  return <React.Fragment><IssuesForm></IssuesForm></React.Fragment>
>>>>>>> 5c1e5de... first commit issues
}

export default App;
