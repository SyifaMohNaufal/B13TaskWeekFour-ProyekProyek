import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Landing from "../Screens/Landing/Index";
import Login from "../Screens/Login/Index";
import Signup from "../Screens/SignUp/Index";
import Profile from "../Screens/Profile/Index";
import Home from "../Screens/Home/Index";
import Details from "../Screens/Home/details";
import Hire from "../Screens/Project/Hire";
import Project from "../Screens/Project/index";
import AddProject from "../Screens/Project/AddProject"
import ProjectStatus from '../Screens/Project/ProjectStts'

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
            <Scene key="landing" component={Landing} initial={true} />
            <Scene key="login" component={Login} />
            <Scene key="signup" component={Signup} title="Register" />
          </Scene>

          <Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
            <Scene key="home" component={Home} />
            <Scene key="profile" component={Profile} />
            <Scene key="details" component={Details} />
            <Scene key="hire" component={Hire} />
            <Scene key="project" component={Project} />
            <Scene key="addproject" component={AddProject} />
            <Scene key="projectstatus" component={ProjectStatus}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
