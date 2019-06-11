import React, { Component } from 'react'
import { Input, Button, Label, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import clientio from 'socket.io-client'
import Services from '../services/ChatServices';
import MessageDisplay from '../components/MessageDisplay'

const userList = new Services().listOfUsers;
const allChats = new Services().allChats;
const socket = clientio.connect('http://localhost:4000')

class Dashboard extends Component {
  constructor(props) {

    super(props);
    this.state = {
      'message': '',
      'listofusers': [],
      'allMessages': [],
      'receiver': '',
      'sender': '',
      'messageDisplay': [],
      'msg' : []

    }
  }

  changeHandler = (e) => {
    this.setState({ message: e.target.value })
    // console.log(this.state.message);
  }

  submitHandler = (e => {
    e.preventDefault();
    var sender = localStorage.getItem('sender');
    var receiver = localStorage.getItem('receiver');
    var message = this.state.message;

    var data = {
      'senderID': sender,
      'receiverID': receiver,
      'newMessage': message
    }
    socket.emit('newMessage', data);

    this.setState({
      message: '',
      anchorEl: null
    });
    this.setState({ messageDisplay: this.state.message });
    this.submitHandler = this.submitHandler.bind(this);
  })

  logout = (e => {
    localStorage.clear();
    this.props.history.push('/login');
  })

  handleClick = (key, e) => {
    e.preventDefault();
    this.setState({ sender: localStorage.getItem('sender') })
    //console.log('sender : ', this.state.sender);
    var Receiver = key.email;
    localStorage.setItem('receiver', Receiver)
    this.setState({ receiver: Receiver })
    //console.log('receiver : ', this.state.receiver);
  }

  componentDidMount() {
    console.log('Component mounted');
    //Get ALL user List
    userList()
      .then(response => {
        this.setState({
          listofusers: response.data.message
        })
        //console.log(this.state.listofusers)
      })
      .catch(err => {
        console.log(err);
      });

    //getALL Chats 
    allChats()
      .then(messages => {
        this.setState({ allMessages: messages.data })
        //console.log(messages.data)
        console.log('hello ', this.state.allMessages)
      })
      .catch(err => {
        console.log('error : ', err);
      })

      const Sender = localStorage.getItem('sender')
                socket.on(Sender, (result) => {
                    const msg = this.state.msg;
                    msg.push(result)
                    this.setState({ msg: msg });
                    console.log(result);
                    console.log("msg==", this.state.msg)
                })
  }

  render() {
    var { message } = this.state.message;
    var userList = this.state.listofusers.map(key => {
      if (key.email !== localStorage.getItem('sender')) {
        return (
          <div>
            <ListGroup>
              <ListGroupItem tag="button" onClick={(e) => this.handleClick(key, e)}>
                {key.fname} {key.lname}
              </ListGroupItem>
            </ListGroup>
          </div>
        )
      }
      return userList;
    })

    var msg = this.state.msg.map(key =>{
      if (key.receiverID === localStorage.getItem('receiver')) {
      return(
        <div>
          <ListGroup>
            <ListGroupItem>
              {localStorage.getItem('firstName')}: {key.message} 
            </ListGroupItem>
          </ListGroup>
        </div>
      )
      }
      return msg;
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

          <Button color="danger" size="lg" onClick={this.logout}>Logout</Button>
        </Row>
        <Row className="chat-row">
          <Col sm="2" md={{ size: 3, offset: -1 }} className="chat-border">
            <div>
              <Label><h4>Contacts</h4></Label>
            </div>
            {userList}
          </Col>
          <Col sm="4" md={{ size: 6, offset: -1 }} className="chat-border">
            <div><Label>{msg}</Label></div>
            <div>
            {<MessageDisplay allMessages={this.state.allMessages}  />}
            </div>
            <div className="input-chat-div">
              <Input
                type="text"
                name="message"
                placeholder="Type message here......."
                value={message}
                onChange={this.changeHandler} />
            <Button outline color="success" onClick={this.submitHandler}>Send</Button></div></Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Dashboard);