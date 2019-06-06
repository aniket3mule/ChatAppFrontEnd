import React, {Component} from 'react'
import {Input, Button, Label } from 'reactstrap'

class Dashboard extends Component{constructor(props){

    super(props);
    this.state = {
        'messsage' : ''
    }
}
changeHandler = (e => {
    this.setState = {[e.target.name] : e.target.value}
})
render(){
    var  {message} = this.state.messsage
    return(
        <div>
            <div>
                <Label>Users</Label>
                <div>

                </div>
            </div>
            <div>
                <Label>Chat Room</Label>
                <div>

                </div>
                <div>
                    <Input
                    type="text"
                    name = "sendMessage"
                    placeholder = "Type message here"
                    value = {message}
                    onClick = {this.changeHandler}/>
                    <Button>Send</Button>
                </div>
            </div>
        </div>

    )
}


}

export default Dashboard;