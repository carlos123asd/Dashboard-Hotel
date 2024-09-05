import Toastify from 'toastify-js'
import { eventPropertiesUser } from '../../forms/validationformNewUser';

const fetchnewUser = (user:eventPropertiesUser) => {
    fetch('http://localhost:3004/employee',{
        method: 'POST',
        body: JSON.stringify(user), //Objeto -> JSON
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
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