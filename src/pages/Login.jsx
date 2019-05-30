import React, {Component} from 'react'
import LoginForm from '../components/LoginForm'
class Login extends Component{
    render(){
        return(
            <div className="container">
            <center><h1>Login Form</h1></center>
            <LoginForm/>
            </div>
        );
    }
}

    export default Login;