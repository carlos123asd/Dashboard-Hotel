import Toastify from 'toastify-js'
import fetchNewBooking from '../db/fecths/newBooking'

export interface eventPropertiesBooking {
    guest: String
    orderDate: Date
    checkin: String
    timein: String
    checkout: String
    timeout: String
    ordertime: Date
    specialRequest: String
    roomType: String
    status: String
    idRoom: String
}

const handlesubmitnewBooking = (event:any,roomid:string) => {
    event.preventDefault()
    let dataBooking:eventPropertiesBooking = {
        guest: event.target.nameguest.value,
        orderDate: new Date(),
        checkin: event.target.checkin.value,
        timein: event.target.checkin.value,
        checkout: event.target.checkout.value,
        timeout: event.target.checkout.value,
        ordertime: new Date(),
        specialRequest: event.target.specialrequest.value,
        roomType: event.target.selectroomtype.value,
        status: 'Check In',
        idRoom: roomid
    }
    if(String(dataBooking.guest) === '' || String(dataBooking.orderDate) === '' ||
    dataBooking.checkin === '' || dataBooking.checkout === '' ||
     dataBooking.idRoom === '')
        {

        if(dataBooking.guest === ''){
            Toastify({
                text: "Guest: Name is necesary",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(dataBooking.checkin === ''){
            Toastify({
                text: "Check In: Date Check in is necesary",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(dataBooking.checkout === ''){
            Toastify({
                text: "Check Out: Date Check out is necesary",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        if(dataBooking.idRoom === ''){
            Toastify({
                text: "Room: It is necessary to select a room",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        return false
    }else{
        dataBooking = {
            ...dataBooking,
            specialRequest: String(event.target.specialrequest.value === "" ? "none" : event.target.specialrequest.value)
        }
        fetchNewBooking(dataBooking)
        return true
    }
}

export default handlesubmitnewBooking