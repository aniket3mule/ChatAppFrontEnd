import axios from "axios";
import clientio from 'socket.io-client'
const endPoint = 'http://localhost:3001'
const socket = clientio(endPoint);

class ChatServices{
    addMessage(data){
        var messageArray =[];
        socket.on()
            // console.log("response", response);
            // console.log("response.data", response.data);
            // console.log("response.data.result", response.data.result);
            // console.log("response", response);
    }
}

export default ChatServices;