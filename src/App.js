import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./components/Navs";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses/Courses";
import Profile from "./components/Profile/Profile";
import CourseDetails from "./components/CourseDetails/CourseDetails";
function App() {
  return (
    <Router>
      <Navs />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/courses" component={Courses} />
        <Route path="/course-details" component={CourseDetails} />
      </Switch>
    </Router>
  );
}

export default App;
