import Booking from '../../class/CBooking';
import { editBooking } from '../db/fecths/editBooking';
import { valuesEditBooking } from '../../interfaces/InterfacePropsValidateFormEditBooking';

const handleValidateFormEditBooking = (idEdit:string,valuesForEdit:valuesEditBooking) => {
    editBooking(idEdit,valuesForEdit)
    return true
}

export default handleValidateFormEditBooking