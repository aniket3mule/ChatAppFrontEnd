import React, {Component} from 'react'
import Dashboard from '../components/Dashboard'

class DashboardPage extends Component{

    render(){
        return(
            <div>
            <div><center><h2>Welcome to Chatting Application</h2></center>  </div>
            <Dashboard/>
            </div>
        )
    }
}

export default DashboardPage