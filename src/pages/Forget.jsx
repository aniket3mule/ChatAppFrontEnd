import React, {Component} from 'react'
import ForgetPassword from '../components/ForgetPassword'


class Forget extends Component{
    render(){
        return(
            <div className="container">
            <center><h1>Forget Password</h1>
            <ForgetPassword/>
            </center>
            </div>

        );
    }
}

export default Forget;