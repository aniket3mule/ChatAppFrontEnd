import axios from 'axios'
// import { withRouter } from 'react-router-dom'
class Services {

    loginService (data){
        return axios.post(`login`, data)
    }

    forgetPassService(data){
        console.log('service : 4 ',data);
        axios.post('forgetpassword', data)
        .then(response => {
            console.log(response);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    
    resetPasswordService(data, token){
        axios.post('resetpassword', data, {
            
            headers:{
                'token' : token
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err =>{
            console.log(err);       
        })
    }

    userRegister(data){
        axios.post('register',data)
        .then(response => {
            console.log(response);
            //console.log(response)
            //window.location.href='login'
        })
        .catch(error => {
            console.log(error);
        })
    }
}


export default Services;