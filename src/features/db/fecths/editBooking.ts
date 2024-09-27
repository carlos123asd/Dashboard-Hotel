import Toastify from 'toastify-js'
import Booking from '../../../class/CBooking';

const token = localStorage.getItem('TOKEN_AUTH')
export const editBooking = (id:string,values:Object) => {
    fetch(`http://localhost:3000/bookings/booking/edit/${id}`,{
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
            console.log(response.json())
            Toastify({
                text: "Booking edited correctly",
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