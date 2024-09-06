import Toastify from 'toastify-js'
import Room from '../../class/CRoom';
import editRoom from '../db/fecths/editRoom';
import { InterfacepropsvaluesEdit } from '../../interfaces/InterfacePropsValidateFormEditRoom';

const handleValidateFormEditRoom = (objedtEdit:Room,valuesForEdit:InterfacepropsvaluesEdit) => {
    if((/^[0-9]*$/.test(String(valuesForEdit.roomNumber) as string) === false || 
        /^[0-9]*$/.test(valuesForEdit.price.slice(1)) === false))
        {
            if(/^[0-9]*$/.test(String(valuesForEdit.roomNumber) as string) === false){
                Toastify({
                    text: "Room Number: Only Number",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }

            if(/^[0-9]*$/.test(valuesForEdit.price.slice(1)) === false){
                Toastify({
                    text: "Price: Only Number",
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
        editRoom(objedtEdit,valuesForEdit)
        return true
    }
}

export default handleValidateFormEditRoom