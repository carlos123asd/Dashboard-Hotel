import Toastify from 'toastify-js'

const handleValidateFormEditRoom = (room) => {
    console.log(room)
    console.log(room.price)
    if(room.numroom === '' || room.facilities === '' ||
        room.price === '' || room.discount === '' ||
        /^[0-9]*$/.test(room.numroom) === false || /^[0-9]*$/.test(room.price) === false)
        {
        console.log('entra')
        if(room.numroom !== ""){
            if(/^[0-9]*$/.test(room.numroom) === false){
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

        if(room.price !== ''){
            if(/^[0-9]*$/.test(room.price) === false){
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

        if(room.facilities === ''){
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
    }else{
            let options
            if(parseInt(room.price) > 0){
                options = {
                    "id": room.idRoom,
                    "photo": [
                        "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHwxNnx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTcyMjU0NDk5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHw5fHxyb29tJTIwaG90ZWx8ZW58MHx8fHwxNzIyNTQ0OTkwfDA&ixlib=rb-4.0.3&q=80&w=1080",
                        "https://images.unsplash.com/photo-1596194815712-2975c42363a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHw2MHx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTcyMjU0NTEyOHww&ixlib=rb-4.0.3&q=80&w=1080"
                    ],
                    "roomNumber": parseInt(room.numroom),
                    "typeRoom": room.typeroom,
                    "offer": true,
                    "price":  `$${room.price}`,
                    "discount": parseInt(room.discount),
                    "status": room.status,
                    "amenities": room.facilities,
                    "cancellation": room.cancellation,
                    "description": room.description
                }
            }else{
                options = {
                   "id": room.idRoom,
                   "photo": [
                        "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHwxNnx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTcyMjU0NDk5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHw5fHxyb29tJTIwaG90ZWx8ZW58MHx8fHwxNzIyNTQ0OTkwfDA&ixlib=rb-4.0.3&q=80&w=1080",
                        "https://images.unsplash.com/photo-1596194815712-2975c42363a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjk0NzV8MHwxfHNlYXJjaHw2MHx8cm9vbSUyMGhvdGVsfGVufDB8fHx8MTcyMjU0NTEyOHww&ixlib=rb-4.0.3&q=80&w=1080"
                    ],
                    "roomNumber": parseInt(room.numroom),
                    "typeRoom": room.typeroom,
                    "offer": false,
                    "price":  `$${room.price}`,
                    "discount": parseInt(room.discount),
                    "status": room.status,
                    "amenities": room.facilities,
                    "cancellation": room.cancellation,
                    "description": room.description
                }
            }
            console.log(options)

            fetch(`http://localhost:3004/rooms/${room.idRoom}`,{
                method: 'PUT',
                body: JSON.stringify(options), //Objeto -> JSON
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
}

export default handleValidateFormEditRoom