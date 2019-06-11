import axios from "axios";

class ChatServices{
    listOfUsers(){
        return axios.get('http://localhost:4000/listofuser')
    }

    allChats(){
        return axios.get('http://localhost:4000/getAllChats')
    }
}

export default ChatServices;