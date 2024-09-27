import Toastify from 'toastify-js'
import { eventPropertiesBooking } from '../../forms/validationformNewBooking';

const token = localStorage.getItem('TOKEN_AUTH')
const fetchNewBooking = (dataBooking:eventPropertiesBooking) => { 
    console.log(dataBooking)
    fetch('http://localhost:3000/bookings/booking/add',{
        method: 'POST',
        body: JSON.stringify(dataBooking),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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