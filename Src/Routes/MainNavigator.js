/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import {Router, Stack, Scene} from 'react-native-router-flux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Landing from '../Screens/Landing/Index';
import Login from '../Screens/Login/Index';
import SignUp from '../Screens/SignUp/Index';
import Home from '../Screens/Home/Index';
import Profile from '../Screens/Profile/Index';
import Project from '../Screens/Project/index';
const HomeNavigation = createStackNavigator(
  {
    Landing,
    SignUp,
    Login,
    Home,
    Profile,
    Project,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Landing'
  }
);

export default createAppContainer(HomeNavigation);
// export default class Routes extends Component {
//   render() {
//     return (
//       <Router>
//         <Scene>
//           <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
//             <Scene key="landing" component={Landing} initial={true} />
//             <Scene key="signup" component={SignUp} title="Register" />
//             <Scene key="login" component={Login} initial={true} />
//             <Scene key="home" component={Home} />
//           </Scene>
//         </Scene>
//       </Router>
//     );
//   }
// }
