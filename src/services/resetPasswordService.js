import axios from 'axios';

function resetPasswordService(data, token){
    
    // console.log('services token : ',token);
    //console.log('Reset pass service : ',data)
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
export default resetPasswordService;