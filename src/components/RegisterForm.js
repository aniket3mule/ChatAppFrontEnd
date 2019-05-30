import React, {Component} from 'react'

class RegisterForm extends Component{
    render(){
        return(
            <div>
            <form className="form-horizontal">
                <div className="form-group">
                <label className="control-label col-sm-2"><b>First Name:</b></label>
                <div className="col-sm-5">
                <input type="text" className="form-control" id="fname" placeholder="Enter first name" required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Last Name:</b></label>
                <div className="col-sm-5">          
                    <input type="text" className="form-control" id="lname" placeholder="Enter last name" required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Mobile Number:</b></label>
                <div className="col-sm-5">          
                    <input type="text" className="form-control" id="mobile" placeholder="Enter mobile number" required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Email:</b></label>
                <div className="col-sm-5">          
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Password:</b></label>
                <div className="col-sm-5">          
                    <input type="password" className="form-control" id="psw" placeholder="Enter password" required/>
                </div>
                </div>
                <div className="form-group">
                <label className="control-label col-sm-2"><b>Confirm Password:</b></label>
                <div className="col-sm-5">          
                    <input type="password" className="form-control" id="cpsw" placeholder="Confirm password" required/>
                </div>
                </div>
                <div className="form-group">        
                <div className="col-sm-offset-10 col-sm-5">
                    <button type="submit" className="btn btn-md btn-success btn-block text-uppercase">Register</button>
                </div>
                </div>
            </form>
            </div>
            
        );
    }
}

export default RegisterForm;