import Toastify from 'toastify-js'
import Employee from '../../../class/CEmployee';

const token = localStorage.getItem('TOKEN_AUTH')
const editUser = (id:string,values:Object) => {
    console.log(values)
    fetch(`http://localhost:3000/users/user/edit/${id}`,{
    method: 'PUT',
    body: JSON.stringify({
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
    }).catch(error => console.error(error))
}

export default editUser