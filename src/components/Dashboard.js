import React, { Component } from 'react'
import { Input, Button, Label, Container, Row, Col, Alert } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import clientio from 'socket.io-client'
import Services from '../services/ChatServices';
import MessageDisplay from '../components/MessageDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
// import { ToastContainer, toast } from 'react-toastify';

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
      'msg': [],
      'receiverMsg': []

    }
  }

  changeHandler = (e) => {
    this.setState({ message: e.target.value })
    // console.log(this.state.message);
  }

  submitHandler = (e => {
    if (!this.state.message) {
      toast.info("Message can not be empty", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
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
      });
      this.setState({ messageDisplay: this.state.message });
    }
  })

  logout = (() => {
    localStorage.clear();
    this.props.history.push('/login');

  })

  handleClick = (key, e) => {
    e.preventDefault();
    this.setState({ sender: localStorage.getItem('sender') })
    localStorage.setItem('receiverName', key.fname)
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

    // const Sender = localStorage.getItem('sender')
    socket.on('sendMessage', (result) => {
      //const msg = this.state.msg;
      this.state.allMessages.push(result);
      this.setState({ msg: this.state.msg });
      console.log(result);
      console.log("msg==", this.state.msg)
    })
    
    // socket.on('Sender', (result) => {
    //   //const msg = this.state.msg;
    //   this.state.msg.push(result)
    //   this.setState({ msg: this.state.msg });
    //   console.log(result);
    //   console.log("msg==", this.state.msg)
    // })
  
  }
  render() {
    var { message } = this.state.message;
    var userList = this.state.listofusers.map((key, i) => {
      if (key.email !== localStorage.getItem('sender')) {
        return (
          <div>
            <Alert color='warning' newkey={i} tag="button" onClick={(e) => this.handleClick(key, e)}>{key.fname} {key.lname}
            </Alert>
          </div>
        )
      }
      return userList;
    })

    var msg = this.state.msg.map((key) => {
      if (key.receiverID === localStorage.getItem('receiver')) {
        return (
          <div>
            <Alert>
              {localStorage.getItem('firstName')}: ({key.message})
            </Alert>
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

<div><h4>{localStorage.getItem('receiverName')}</h4></div>
            <div>
              <Label>{<MessageDisplay allMessages={this.state.allMessages} />}</Label>

              {/* <div >{receiverMsg}</div> */}
              <div className='send-message'>{msg}</div>
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
        <ToastContainer />
      </Container>
    )
  }
}

export default withRouter(Dashboard);