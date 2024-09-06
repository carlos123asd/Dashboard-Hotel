import Booking from '../../class/CBooking';
import { editBooking } from '../db/fecths/editBooking';
import { valuesEditBooking } from '../../interfaces/InterfacePropsValidateFormEditBooking';

const handleValidateFormEditBooking = (objedtEdit:Booking,valuesForEdit:valuesEditBooking) => {
    editBooking(objedtEdit,valuesForEdit)
    return true
}

export default handleValidateFormEditBooking