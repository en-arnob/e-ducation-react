import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./components/Navs";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Router>
      <Navs />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </Router>
  );
}

export default App;
