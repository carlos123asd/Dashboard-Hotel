import Toastify from 'toastify-js'

const handlesubmitnewRoom = async (event) => {
    event.preventDefault()
    if(event.target.roomnumber.value === "" || event.target.price.value === '' ||
         event.target.price.value === '' || event.target.price.value === '' ||
          event.target.price.value === '' || event.target.photourl1.value === '' ||
           event.target.photourl2.value === '' || event.target.photourl3.value === '' || 
        /^[0-9]*$/.test(event.target.roomnumber.value) === false || /^[0-9]*$/.test(event.target.price.value) === false)
        {

        if(event.target.roomnumber.value !== ""){
            if(/^[0-9]*$/.test(event.target.roomnumber.value) === false){
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

        if(event.target.price.value !== ''){
            if(/^[0-9]*$/.test(event.target.price.value) === false){
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

        if(event.target.textareadescription.value === ''){
            Toastify({
                text: "Description: Necessary description of the room",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        if(event.target.textareapolicy.value === ''){
            Toastify({
                text: "Cancellation policies: Necessary Cancellation policies",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        if(event.target.offers.value === 'yes'){
            if(event.target.numdescuento.value === ''){
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
        }
        if(event.target.photourl1.value === '' || event.target.photourl2.value === '' || event.target.photourl3.value === ''){
            Toastify({
                text: "URL Photo: Required, min 3",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        if(event.target.facilities1.checked === false && event.target.facilities2.checked === false && event.target.facilities3.checked === false
            && event.target.facilities4.checked === false && event.target.facilities5.checked === false && event.target.facilities6.checked === false
            && event.target.facilities7.checked === false && event.target.facilities8.checked === false){
            Toastify({
                text: "Facilities: Required, min 1",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
    }else{
        const options = {
                "roomNumber": event.target.roomnumber.value,
                "photo": [
                    event.target.photourl1.value,
                    event.target.photourl2.value,
                    event.target.photourl3.value
                ],
                "typeRoom": event.target.selectroomtype.value,
                "description": event.target.textareadescription.value,
                "offer": event.target.offers.value === 'yes' ? true : false,
                "price":  event.target.price.value,
                "discount": event.target.numdescuento.value,
                "cancellation": event.target.textareapolicy.value,
                "idRoom": Math.floor(Math.random()*3000),
                "status": "Available",
                "amenities": `${event.target.facilities1.value},${event.target.facilities2.value},${event.target.facilities3.value},
                ${event.target.facilities4.value},${event.target.facilities5.value},${event.target.facilities6.value},${event.target.facilities7.value},
                ${event.target.facilities8.value},`
        }

        fetch('http://localhost:3004/rooms',{
            method: 'POST',
            body: JSON.stringify(options), //Objeto -> JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            if(response.ok){
                Toastify({
                    text: "Room Created Successfully",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#135846'
                    }
                }).showToast();
            }
        })
    }
}

export default handlesubmitnewRoom;