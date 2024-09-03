import Toastify from 'toastify-js'
import Room from '../../../class/Room';

const editRoom = (room:Room,values:any) => {
   /* if(values.typeRoom === '' && values.status === ''){
        values = {
            ...values,
            status: room.status,
            typeRoom: room.typeRoom
        }
    }else if(values.typeRoom === ''){
        values = {
            ...values,
            typeRoom: room.typeRoom
        }
    }else if(values.status === ''){
        values = {
            ...values,
            status: room.status
        }
    }*/
    fetch(`http://localhost:3004/rooms/${room.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...room,
        ...values
    }), //Objeto -> JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
    }).then(response => {
        if(response.ok){
            console.log(response.json())
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
    }).catch(error => console.log(error))
}

export default editRoom