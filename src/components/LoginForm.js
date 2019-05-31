import React, {Component} from 'react'
import axios from 'axios'

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

    submitHandler = e => {
        e.preventDefault()
        axios
        .post('http://localhost:3001/api/login', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        const { email, password} = this.state
        return(
            <div>
                <form className="form-horizontal" onSubmit = {this.submitHandler}>
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
                        <button type="submit" className="btn btn-md btn-success btn-block text-uppercase">Login</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;