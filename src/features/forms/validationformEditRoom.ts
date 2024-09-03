import Toastify from 'toastify-js'
import Room from '../../class/Room';
import editRoom from '../db/fecths/editRoom';

const handleValidateFormEditRoom = (objedtEdit:Room,valuesForEdit:any) => {
    if(/^[0-9]*$/.test(valuesForEdit.roomNumber) === false || 
        /^[0-9]*$/.test(valuesForEdit.price.slice(1)) === false)
        {

            if(/^[0-9]*$/.test(valuesForEdit.roomNumber) === false){
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
    }else{
        editRoom(objedtEdit,valuesForEdit)
    }
}

export default handleValidateFormEditRoom