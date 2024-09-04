import Toastify from 'toastify-js'

interface eventProperties {
    roomNumber:number
    photo:string[]
    typeRoom:string
    description:string
    offer:boolean
    price:string
    discount:number
    cancellation:string
    amenities:string[]
}

interface valueSend {
    id:string
    roomNumber:number
    photo:string[]
    typeRoom:string
    description:string
    offer:boolean
    price:string
    discount:number
    cancellation:string
    status:string
    amenities:string[]
}

const handlesubmitnewRoom = async (event:any,idnew:string) => {
    event.preventDefault()
    const dataRoom:eventProperties = {
        roomNumber:event.target.roomnumber.value,
        photo:[event.target.photourl1.value,event.target.photourl2.value,event.target.photourl3.value],
        typeRoom:event.target.selectroomtype.value,
        description:event.target.textareadescription.value,
        offer:event.target.offers.value,
        price:event.target.price.value,
        discount:event.target.numdescuento.value,
        cancellation:event.target.textareapolicy.value,
        amenities:[
            event.target.facilities1.checked === true ? event.target.facilities1.value : '',
            event.target.facilities2.checked === true ? event.target.facilities2.value : '',
            event.target.facilities3.checked === true ? event.target.facilities3.value : '',
            event.target.facilities4.checked === true ? event.target.facilities4.value : '',
            event.target.facilities5.checked === true ? event.target.facilities5.value : '',
            event.target.facilities6.checked === true ? event.target.facilities6.value : '',
            event.target.facilities7.checked === true ? event.target.facilities7.value : '',
            event.target.facilities8.checked === true ? event.target.facilities8.value : '',
        ]
    }
    console.log(dataRoom)
    
    if(String(dataRoom.roomNumber) === '' || dataRoom.price === '' ||
        dataRoom.typeRoom === '' || dataRoom.photo[2] === '' ||
        dataRoom.description === '' || dataRoom.cancellation === '' ||
        dataRoom.amenities.join() === ',,,,,,,' ||
        /^[0-9]*$/.test(String(dataRoom.roomNumber)) === false ||
         /^[0-9]*$/.test(dataRoom.price) === false)
        {

        if(dataRoom.amenities.join() === ',,,,,,,'){
            Toastify({
                text: "Amenities: Min 1 amenities checked",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(String(dataRoom.roomNumber) !== ''){
            if(/^[0-9]*$/.test(String(dataRoom.roomNumber)) === false){
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

        if(dataRoom.price !== ''){
            if(/^[0-9]*$/.test(dataRoom.price) === false){
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

        if(dataRoom.description === ''){
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
        if(dataRoom.cancellation === ''){
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
        if(dataRoom.offer === true){
            if(dataRoom.discount === undefined){
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
        if(dataRoom.photo[2] === ''){
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
    }else{
        const amenitiesClean = dataRoom.amenities.filter((room) => room !== '')
        const send:valueSend = {
                roomNumber: Number(dataRoom.roomNumber),
                photo: dataRoom.photo,
                typeRoom: dataRoom.typeRoom,
                description: dataRoom.description,
                offer: Boolean(dataRoom.offer),
                price: `$${dataRoom.price}`,
                discount: Number(dataRoom.discount),
                cancellation: dataRoom.cancellation,
                id: String(idnew),
                status: "Available",
                amenities: amenitiesClean
        }

        fetch('http://localhost:3004/rooms',{
            method: 'POST',
            body: JSON.stringify(send), //Objeto -> JSON
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