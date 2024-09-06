import Toastify from 'toastify-js'
import Booking from '../../class/Booking';
import { editBooking } from '../db/fecths/editBooking';

export interface valuesEditBooking {
    id: string
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

const handleValidateFormEditBooking = (objedtEdit:Booking,valuesForEdit:valuesEditBooking) => {
    editBooking(objedtEdit,valuesForEdit)
    return true
}

export default handleValidateFormEditBooking