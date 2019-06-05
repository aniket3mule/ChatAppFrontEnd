import axios from 'axios'

function userRegister(data){
    axios.post('register',data)
    .then(response => {
        console.log(response);
        //toast("registered Successfully")
        //console.log(response)
        window.location.href='login'
    })
    .catch(error => {
        console.log(error);
    })
}


export default userRegister;