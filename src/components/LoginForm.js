import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Services from '../services/UserServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
const loginService = new Services().loginService;

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (!this.state.email) {
            toast.error("email can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.password) {
            toast.error("password can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }


        var data = {
            'email': this.state.email,
            'password': this.state.password
        }
        loginService(data)
            .then(response => {
                console.log(response);
                localStorage.setItem('firstName', response.data.message.fname);
                localStorage.setItem('lastName', response.data.message.lname);
                localStorage.setItem('userId', response.data.message.id);
                localStorage.setItem('sender', response.data.message.email);
                localStorage.setItem('userToken', response.data.message.token);
                this.props.history.push('/dashboard');
            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid username or Password", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="login-form">
                <form className="form-horizontal" >
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Email:</b></label>
                        <div className="col-sm-6">
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.changeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Password:</b></label>
                        <div className="col-sm-6">
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={this.changeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-10 col-sm-6">
                            <button type="submit"
                                className="btn btn-md btn-success btn-block text-uppercase"
                                onClick={this.submitHandler} >Login</button>
                        </div>
                    </div>
                </form>
                <ToastContainer/>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                   
        );
    }
}

export default withRouter(LoginForm);