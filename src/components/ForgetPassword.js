import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Services from '../services/Services';

const forgetPass = new Services().forgetPassService;

class ForgetPassword extends Component{constructor(props){
  super(props);
  this.state = {
      email : ''
  }
}
changeHandler = e => {
    this.setState({[e.target.name]: e.target.value })
}
submitHandler = e => {
    e.preventDefault();
    var data = {
        'email' : this.state.email
    }
    forgetPass(data);
}
    render(){
        const {email} = this.state.email;
        return(
            <Form>
                <FormGroup row>
                    <Label for='Forget Password' sm={2}>Email : </Label>
                        <Col>
                        <Input 
                        type = 'email'
                        name = 'email'
                        placeholder = 'Enter email Id'
                        value = {email}
                        onChange={this.changeHandler}
                        required/>
                        </Col>
                </FormGroup>
                <FormGroup>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={this.submitHandler}>Submit</Button>
                        </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ForgetPassword