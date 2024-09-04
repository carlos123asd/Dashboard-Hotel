import Toastify from 'toastify-js'
import { eventPropertiesBooking } from '../../forms/validationformNewBooking';

const fetchNewBooking = (dataBooking:eventPropertiesBooking) => { 
    fetch('http://localhost:3004/bookings',{
        method: 'POST',
        body: JSON.stringify(dataBooking),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        if(response.ok){
            Toastify({
                text: "Booking Created Successfully",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#135846'
                }
            }).showToast();
        }
    })
}

export default fetchNewBooking