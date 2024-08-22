import Toastify from 'toastify-js'
import editRoom from '../db/fecths/editRoom';

const handleValidateFormEditRoom = (values,room) => {
    if(room.roomNumber === '' || room.amenities === '' ||
        room.price.slice(1) === '' || room.discount === '' ||
        /^[0-9]*$/.test(room.roomNumber) === false || /^[0-9]*$/.test(room.price.slice(1)) === false)
        {
        console.log('entra')
        if(room.roomNumber !== ""){
            if(/^[0-9]*$/.test(room.roomNumber) === false){
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
        }else{
            Toastify({
                text: "Room Number: Necessary value",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(room.price.slice(1) !== ''){
            if(/^[0-9]*$/.test(room.price.slice(1)) === false){
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
            Toastify({
                text: "Price: Necessary value",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(room.amenities === ''){
            Toastify({
                text: "Facilities: Necessary facilities of the room",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(room.discount === ''){
                Toastify({
                    text: "Offer: Percentage of Offer Required",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
        }
        console.log('entra')
    }else{
        editRoom(values,room)
    }
}

export default handleValidateFormEditRoom