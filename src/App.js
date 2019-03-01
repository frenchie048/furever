import React, { Component } from 'react';
import './reset.css';
import UserDashboard from './components/User/Dashboard/Dashboard';
import Login from './components/Login/Login';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <Header /> */}
        </header>
        <main>
          {/* THIS WILL BECOME TERNARY - if not logged in, display Login component; else if logged in && user, display user dashboard; else if logged in && rescue, display rescue dashboard */}
          {/* <Login /> */}
          <UserDashboard />
          {/* <RescueDash /> */}
        </main>
      </div>
    );
  }
}

export default App;
