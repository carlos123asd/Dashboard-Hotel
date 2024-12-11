import Swal from 'sweetalert2'

const token = localStorage.getItem('TOKEN_AUTH')
const deleteRoom = (room:string) => {
    fetch(`http://localhost:3000/rooms/room/delete/${room}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if(response.ok){
            Swal.fire({
                title: "Room removed",
                text: "Room Deleted Successfully",
                icon: "success"
              });
        }
    }).catch(error => console.error(error))
}

export default deleteRoom