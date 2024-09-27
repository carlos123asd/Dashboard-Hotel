import Toastify from 'toastify-js'
import Room from '../../../class/CRoom';

const token = localStorage.getItem('TOKEN_AUTH')
const editRoom = (id:string,values:Room) => {
    fetch(`http://localhost:3000/rooms/room/edit/${id}`,{
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
                text: "Room Edited Successfully",
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

export default editRoom