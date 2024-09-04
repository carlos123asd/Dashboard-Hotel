import Toastify from 'toastify-js'

const deleteBooking = (booking:string) => {
    fetch(`http://localhost:3004/bookings/${booking}`,{
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

export default deleteBooking