import Toastify from 'toastify-js'
import { eventPropertiesUser } from '../../forms/validationformNewUser';

const token = localStorage.getItem('TOKEN_AUTH')
const fetchnewUser = (user:eventPropertiesUser) => {
    fetch('http://localhost:8000/users/user/add',{
        method: 'POST',
        body: JSON.stringify(user), 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if(response.ok){
            Toastify({
                text: "User Created Successfully",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#135846'
                }
            }).showToast();
        }
    })
}

export default fetchnewUser