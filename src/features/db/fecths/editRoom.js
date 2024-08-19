import Toastify from 'toastify-js'

const editRoom = (room) => {
    fetch(`http://localhost:3004/rooms/${room.id}`,{
    method: 'PUT',
    body: JSON.stringify(room), //Objeto -> JSON
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