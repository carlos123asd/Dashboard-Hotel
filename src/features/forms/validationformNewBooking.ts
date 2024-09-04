import Toastify from 'toastify-js'
import fetchNewBooking from '../db/fecths/newBooking'

export interface eventPropertiesBooking {
    id:String
    guest: string
    orderDate: string
    checkin: string
    timein: string
    checkout: string
    timeout: string
    ordertime: string
    specialRequest: string
    roomType: string
    status: string
    idRoom: number
}

const handlesubmitnewBooking = (event:any,idnew:string,roomid:string) => {
    event.preventDefault()
    const dataBooking:eventPropertiesBooking = {
        id: idnew,
        guest: event.target.nameguest.value,
        orderDate: String(new Date().getDate),
        checkin: event.target.checkin.value,
        timein: event.target.checkin.value,
        checkout: event.target.checkout.value,
        timeout: event.target.checkout.value,
        ordertime: String(new Date().getTime),
        specialRequest: event.target.specialrequest.value,
        roomType: event.target.selectroomtype.value,
        status: 'Check In',
        idRoom: Number(roomid)
    }
    if(String(dataBooking.guest) === '' || dataBooking.orderDate === '' ||
    dataBooking.checkin === '' || dataBooking.checkout === '' ||
     dataBooking.idRoom === 0)
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
        if(dataBooking.idRoom === 0){
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
        let dataBooking:eventPropertiesBooking = {
            id: idnew,
            guest: event.target.nameguest.value,
            orderDate: String(new Date().getDate()),
            checkin: event.target.checkin.value,
            timein: event.target.checkin.value,
            checkout: event.target.checkout.value,
            timeout: event.target.checkout.value,
            ordertime: String(new Date().getTime()),
            specialRequest: event.target.specialrequest.value,
            roomType: event.target.selectroomtype.value,
            status: 'Check In',
            idRoom: Number(roomid)
        }
        dataBooking = {
            ...dataBooking,
            specialRequest: String(event.target.specialrequest.value === "" ? "none" : event.target.specialrequest.value)
        }
        fetchNewBooking(dataBooking)
        return true
    }
}

export default handlesubmitnewBooking