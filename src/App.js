
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'


class App extends Component{
  render(){
    return(
      <div>
        
      <Router>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={Register}/>
      </Router>
      </div>
        
    );
  }
  
}

export default App;
