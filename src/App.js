import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import UserForm from "./components/users/userForm";
import Users from "./components/users/users";
import "./components/Fontawesomeicon/Fontawesome";
import Issues from "./components/issues/issues";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/users" component={Users}></Route>
            <Route path="/users/:id" component={UserForm} />
            <div className="login">
              <Route exact path="/login" component={LoginForm}></Route>
              <Route exact path="/register" component={RegisterForm}></Route>
              <Route exact path="/issues" component={Issues}></Route>
            </div>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
