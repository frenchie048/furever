import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';

import UserLogin from './components/Login/User/UserLogin';
import UserRegistration from './components/Login/User/UserRegistration';
import UserDash from './components/User/Dashboard/Dashboard';
import UserOptions from './components/User/Profile/Profile';
import Matches from './components/User/Matches/Matches';

import RescueLogin from './components/Login/Rescue/RescueLogin';
import RescueRegistration from './components/Login/Rescue/RescueRegistration';
import RescueDash from './components/Rescue/RescueDashboard/RescueDashboard';
// import RescueOptions from './components/User/Profile/Profile';


export default <Switch>
    <Route exact path='/' component={Landing} />

    <Route path='/userlogin' component={UserLogin} />
    <Route path='/userregistration' component={UserRegistration} />
    <Route path='/dashboard' component={UserDash} />
    <Route path='/profile' component={UserOptions} />
    <Route path='/matches' component={Matches} />

    <Route path='/rescuelogin' component={RescueLogin} />
    <Route path='/rescueregistration' component={RescueRegistration} />
    <Route path='/rescuedashboard' component={RescueDash} />

</Switch>