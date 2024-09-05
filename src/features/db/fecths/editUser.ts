import Toastify from 'toastify-js'
import Employee from '../../../class/Employee';
import { valuesEditUser } from '../../forms/validationformEditUser';

const editUser = (user:Employee,values:valuesEditUser) => {
    fetch(`http://localhost:3004/employee/${user.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...user,
        ...values
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
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