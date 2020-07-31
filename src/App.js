import React from "react";
// import Login from "./components/login/Login";
import Navbar from "./components/Navbar.jsx";
import LoginForm from "./components/common/loginForm";
// import Register from "./components/login/Register";
import RegisterForm from "./components/common/registerForm";
import UserForm from "./components/common/userForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Fontawesomeicon/Index";
import "./App.css";
import Issues from "./components/issues/issues";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/editusers" component={UserForm}></Route>
          <div className="login">
            <Route exact path="/login" component={LoginForm}></Route>
            <Route exact path="/register" component={RegisterForm}></Route>
            <Route exact path="/issues" component={Issues}></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
