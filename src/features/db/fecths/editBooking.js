import Toastify from 'toastify-js'

const editBooking = (booking,values,message) => {
    console.log(booking)
    console.log(values)
    console.log(message)
    /*
    if(values.typeRoom === '' && values.status === ''){
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
    fetch(`http://localhost:3004/bookings/${booking.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...booking,
        ...values
    }), //Objeto -> JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
    }).then(response => {
        if(response.ok){
            console.log(response.json())
            Toastify({
                text: message,//"Booking: Check Out edited",
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