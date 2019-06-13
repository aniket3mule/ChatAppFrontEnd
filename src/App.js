
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/Forget'
import ResetPassword from './pages/resetpassword';
import DashboardPage from './pages/Dashboard';
import Home from './pages/Home';
 


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Route use strict path="" component={Login}/> */}
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/dashboard" component={DashboardPage} />
        </Router>
      </div>

    );
  }
}
export default App;
