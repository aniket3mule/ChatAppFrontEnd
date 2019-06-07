import React, {Component} from 'react'

import Services from '../services/Services';
const loginService = new Services().loginService;

class LoginForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        var data = {
            'email' : this.state.email,
            'password' : this.state.password
        }
        loginService(data)
    }

    render(){
        const { email, password} = this.state
        return(
            <div>
                <form className="form-horizontal" >
                    <div className="form-group">
                    <label className="control-label col-sm-2"><b>Email:</b></label>
                    <div className="col-sm-5">
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value ={email} 
                        onChange={this.changeHandler}/>
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label col-sm-2"><b>Password:</b></label>
                    <div className="col-sm-5">          
                        <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter password" 
                        value={password}
                        onChange={this.changeHandler}/>
                    </div>
                    </div>
                    <div className="form-group">        
                    <div className="col-sm-offset-10 col-sm-5">
                        <button type="submit" 
                        className="btn btn-md btn-success btn-block text-uppercase"
                        onClick = {this.submitHandler}>Login</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;