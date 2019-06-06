import axios from 'axios';

function forgetPassService(data){
    console.log('service : 4 ',data);
    
    axios.post('forgetpassword', data)
    .then(response => {
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    })

}

export default forgetPassService;