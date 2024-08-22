import Toastify from 'toastify-js'

const editRoom = (room,values) => {
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
    }
    console.log(values)
    fetch(`http://localhost:3004/rooms/${room.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...room,
        typeRoom: values.typeRoom,
        roomNumber: values.roomNumber,
        amenities: values.amenities,
        price: values.price,
        offer: values.offer,
        discount: values.discount,
        status: values.status,
        description: values.description,
        cancellation: values.cancellation
    }), //Objeto -> JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
    }).then(response => {
        if(response.ok){
            console.log(response.json())
            Toastify({
                text: "Room Edited Successfully",
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

export default editRoom