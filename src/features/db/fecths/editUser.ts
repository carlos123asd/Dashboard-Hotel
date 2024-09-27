import Toastify from 'toastify-js'
import Employee from '../../../class/CEmployee';

const token = localStorage.getItem('TOKEN_AUTH')
const editUser = (user:Employee,values:Object) => {
    fetch(`http://localhost:3000/users/user/edit/${user._id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...user,
        ...values
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    }).then(response => {
        if(response.ok){
            Toastify({
                text:'User edited successfully',
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#135846'
                }
            }).showToast();
        }
    }).catch(error => console.log(error))
}

export default editUser