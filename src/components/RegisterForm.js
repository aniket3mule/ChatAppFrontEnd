import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Services from '../services/UserServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

const userRegister = new Services().userRegister;

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            password: '',
            cpsw: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();

        if (!this.state.fname) {
            toast.error("first name can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.lname) {
            toast.error("last name can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.email) {
            toast.error("Email can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.password) {
            toast.error("password can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.cpsw) {
            toast.error("password can not be empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(this.state.password !== this.state.cpsw){
            toast.error("Password and Confirm not matching", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            var data = {
                'fname': this.state.fname,
                'lname': this.state.lname,
                'email': this.state.email,
                'password': this.state.password,
                'cpsw': this.state.cpsw
            }
            userRegister(data);
        }

    }
    loginclick = e => {
        e.preventDefault();
        this.props.history.push('/login')
    }
    render() {
        const { fname, lname, email, password, cpsw } = this.state
        return (
            <div className="login-form">
                <form className="form-horizontal" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>First Name:</b></label>
                        <div className="col-sm-6">
                            <input type="text"
                                className="form-control"
                                name="fname"
                                placeholder="Enter first name"
                                value={fname}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Last Name:</b></label>
                        <div className="col-sm-6">
                            <input type="text"
                                className="form-control"
                                name="lname"
                                placeholder="Enter last name"
                                value={lname}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Email:</b></label>
                        <div className="col-sm-6">
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Password:</b></label>
                        <div className="col-sm-6">
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Confirm password"
                                value={password}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2"><b>Confirm Password:</b></label>
                        <div className="col-sm-6">
                            <input type="password"
                                className="form-control"
                                name="cpsw"
                                placeholder="Confirm password"
                                value={cpsw}
                                onChange={this.changeHandler}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-10 col-sm-6">
                            <button type="submit"
                                className="btn btn-md btn-success btn-block text-uppercase"
                                onClick={this.submitHandler}>Register</button>
                        </div>
                    </div>
                    <div className="col-sm-offset-10 col-sm-6">
                        <button type="submit" className="btn btn-md btn-info btn-block text-uppercase"
                            onClick={this.loginclick}>Sign In Instead</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter(RegisterForm);