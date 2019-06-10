import React, { Component } from 'react'
import axios from 'axios'
import ChatServices from '../services/ChatServices'
import { Input, Button, Label, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import clientio from 'socket.io-client'
const addMessage = new ChatServices().addMessage;


class Dashboard extends Component {
  constructor(props) {

    super(props);
    this.state = {
      'message': '',
      'listofusers': [],
      'allMessages' : [],
      'receiver' : ''
    }
  }

  changeHandler = (e => {
    this.setState = { [e.target.name]: e.target.value }
    console.log(this.state.message);
  })
  
  submitHandler = (e =>{
    e.preventDefault();
    var data ={
      'message' : this.state.message
    }
    addMessage(data);
  })

  handleClick =(e =>{
    this.setState = {[e.target.receiver]: e.target.value}
    console.log('receiver : ',this.state.receiver);
    
  })

  componentDidMount() {
    console.log('Component mounted');
    axios
      .get('http://localhost:3001/listofuser')
      .then(response => {
        this.setState({
          listofusers: response.data.message
        })
        console.log(this.state.listofusers)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var { message } = this.state.message;
    var { receiver } = this.state.receiver;
    var userList = this.state.listofusers.map(key => {
      if (key.email !== localStorage.getItem('userEmail')) {
        return (
          <div>
            <ListGroup>
              <ListGroupItem name='receiver' value={receiver} tag="button" onClick={(e) => this.handleClick(key, e)}>
                {key.fname} {key.lname}
              </ListGroupItem>
            </ListGroup>
          </div>
        )
      }
      return userList;
    })
    return (
      <Container>
        <Row className="chat-header">
          <Col sm="2" md={{ size: 3, offset: -1 }} className="chat-border">
            <Label><h4>Welcome: {localStorage.getItem('firstName')}</h4></Label>
          </Col>
          <Col sm="4" md={{ size: 6, offset: -1 }} className="chat-border">
            <Label><h3>Chat Room</h3></Label>
          </Col>
          <Button color="danger" size="lg">Logout</Button>
        </Row>
        <Row className="chat-row">
          <Col sm="2" md={{ size: 3, offset: -1 }} className="chat-border">
            <div>
              <Label><h4>Contacts</h4></Label>
            </div>
            {userList}
          </Col>
          <Col sm="4" md={{ size: 6, offset: -1 }} className="chat-border">
            <div><Label>Username :</Label></div>
            <div className="input-chat-div">
              <Input
                type="text"
                name="message"
                placeholder="Type message here......."
                value={message}
                onChange={this.changeHandler} />
            </div>
          </Col>
          <Col className="button-chat-div"><div><Button outline color="success" onClick={this.submitHandler}>Send</Button></div></Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard;