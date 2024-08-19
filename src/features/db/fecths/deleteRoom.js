import Toastify from 'toastify-js'

const deleteRoom = (room) => {
    fetch(`http://localhost:3004/rooms/${room}`,{
        method: 'DELETE'
    }).then(response => {
        if(response.ok){
            Toastify({
                text: "Room Deleted Successfully",
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

export default deleteRoom