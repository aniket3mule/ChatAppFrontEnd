import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Services from '../services/Services';
const resetPasswordService = new Services().resetPasswordService;

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        var data = {
            'password': this.state.password,
            'confirmPassword': this.state.confirmPassword
        }
        const url = window.location.pathname;
        const token = url.substring(15);
        console.log("token :", token);

        resetPasswordService(data, token);
    }
    render() {
        const { password, confirmPassword } = this.state;
        return (
            <Form>
                <FormGroup row>
                    <Label for='Forget Password' sm={{ offset: 3, size: 50 }}>Password : </Label>
                    <Col>
                        <Input
                            type='password'
                            name='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={this.changeHandler} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='Forget Password' sm={{ offset: 3, size: 20 }}>Confirm Password : </Label>
                    <Col>
                        <Input
                            type='password'
                            name='confirmPassword'
                            placeholder='Enter email Id'
                            value={confirmPassword}
                            onChange={this.changeHandler} />
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

export default ResetPassword