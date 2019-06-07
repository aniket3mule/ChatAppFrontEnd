import React, {Component} from 'react'
import axios from 'axios'
import {Input, Button, Label, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

class Dashboard extends Component{constructor(props){

    super(props);
    this.state = {
        'messsage' : '',
        'listofusers'  : []
    }
}

changeHandler = (e => {
    this.setState = {[e.target.name] : e.target.value}
})

componentDidMount(){
  console.log('Component mounted');
  axios
  .get('http://localhost:3001/listofuser')
  .then(response => {
    this.setState({
      listofusers : response.data.message
    })
      console.log(this.state.listofusers)
    })
  .catch(err => {
    console.log(err);
  });  
}

render(){
    var  {message} = this.state.messsage;
    var userList=this.state.listofusers.map(key =>{
      return (
      <div>
      <ListGroup>
      <ListGroupItem tag= "button" onClick={(event) => this.handleClick(key, event)}>
      {key.fname} {key.lname}
      </ListGroupItem>
      </ListGroup>
      </div>
      )
    })
    return(
        <Container>
        <Row className= "chat-header">
          <Col sm="2" md={{ size: 3, offset: -1 }} className="chat-border">
          <Label><h3>Users</h3></Label>
          </Col>
          <Col sm="4" md={{ size: 6, offset: -1 }} className="chat-border">
          <Label><h3>Chat Room</h3></Label>
          </Col>
          <Button color="danger" size = "lg">Logout</Button>
        </Row>
        <Row className="chat-row">
        <Col sm="2" md={{ size: 3, offset: -1 }} className="chat-border">
        <div>
          <Label><h4>Online Users</h4></Label>
        </div>
        {userList}
        </Col>
        <Col sm="4" md={{ size: 6, offset: -1 }} className="chat-border">
        <div><Label>Username :</Label></div>
        <div className ="input-chat-div">
            <Input
            type="text"
            name = "sendMessage"
            placeholder = "Type message here......."
            value = {message}
            onClick = {this.changeHandler}/>
            </div>
        </Col>
        <Col className="button-chat-div"><div><Button outline color="success">Send</Button></div></Col>
        </Row>
      </Container>
    )
}
}

export default Dashboard;