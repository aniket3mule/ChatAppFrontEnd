import React, {Component} from 'react'
import axios from 'axios'

class RegisterForm extends Component{constructor(props){
    super(props)

    this.state = {
        fname       : '',
        lname       : '',
        email       : '',
        mobile      : '',
        password    : '',
        cpsw        : ''
    }
}

changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
    e.preventDefault()
    axios
    .post('http://localhost:3001/register', this.state)
    .then(response => {
        console.log(response);
        //toast("registered Successfully")
        console.log(response)
        window.location.href='http://localhost:3000/login'
    })
    .catch(error => {
        console.log(error);
    })
}

render(){
    const { fname, lname, email, password, cpsw} = this.state
        return(
            <div>
            <form className="form-horizontal" onSubmit = {this.submitHandler}>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>First Name:</b></label>
                <div className="col-sm-5">
                <input type="text"
                className="form-control"
                name="fname"
                placeholder="Enter first name"
                value ={fname} 
                onChange={this.changeHandler}
                required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Last Name:</b></label>
                <div className="col-sm-5">          
                    <input type="text"
                    className="form-control"
                    name="lname"
                    placeholder="Enter last name"
                    value ={lname} 
                    onChange={this.changeHandler}
                    required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Email:</b></label>
                <div className="col-sm-5">          
                    <input type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter email" 
                    value ={email} 
                    onChange={this.changeHandler}
                    required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Password:</b></label>
                <div className="col-sm-5">          
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Confirm password"
                    value ={password} 
                    onChange={this.changeHandler}
                    required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Confirm Password:</b></label>
                <div className="col-sm-5">          
                    <input type="password"
                    className="form-control"
                    name="cpsw"
                    placeholder="Confirm password"
                    value ={cpsw} 
                    onChange={this.changeHandler}
                    required/>
                </div>
                </div>
                <div className="form-group">        
                <div className="col-sm-offset-10 col-sm-5">
                    <button type="submit"
                    className="btn btn-md btn-success btn-block text-uppercase">Register</button>
                </div>
                </div>
            </form>
            </div>
            

        );
    }
}

export default RegisterForm;