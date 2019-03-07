import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import UserLogin from './components/Login/User/UserLogin';
import UserRegistration from './components/Login/User/UserRegistration';
import UserDash from './components/User/Dashboard/Dashboard';
import UserProfile from './components/User/Profile/Profile';
// import UserPreferences from './components/User/Profile/Preferences';
import Matches from './components/User/Matches/Matches';

export default <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/userlogin' component={UserLogin} />
    <Route path='/userregistration' component={UserRegistration} />
    <Route path='/dashboard' component={UserDash} />
    <Route path='/profile' component={UserProfile} />
    {/* <Route path='/profile/preferences' component={UserPreferences} /> */}
    <Route path='/matches' component={Matches} />
</Switch>