import Toastify from 'toastify-js'
import Booking from '../../../class/Booking';
import { valuesEditBooking } from '../../forms/validationformEditBooking';

const editBooking = (booking:Booking,values:valuesEditBooking) => {
    fetch(`http://localhost:3004/bookings/${booking.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...booking,
        ...values
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
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

export default editBooking