import React, {Component} from 'react'
import Register from '../components/RegisterForm'
class RegisterUser extends Component{
    render(){
        return(
            <div className="container">
            <center><h1>Register user</h1></center>
            <Register/>
            </div>
        );
    }
}
    export default RegisterUser;