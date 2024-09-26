import Toastify from 'toastify-js'
const token = localStorage.getItem('TOKEN_AUTH')
const deleteBooking = (booking:string) => {
    fetch(`http://localhost:8000/bookings/booking/delete/${booking}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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