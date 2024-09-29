import Toastify from 'toastify-js'
import fetchnewUser from '../db/fecths/newUser'

export interface eventPropertiesUser {
    photo:string
    name:string
    email:string
    password:string
    startdate:Date
    description:string
    phone:string
    status:string
}

const handlesubmitnewUser = (event:any,date:Date) => {
    event.preventDefault()
    let dataUser:eventPropertiesUser = {
        photo: "https://static.vecteezy.com/system/resources/previews/011/186/876/original/male-profile-picture-symbol-vector.jpg",
        name: event.target.nameuser.value,
        email: event.target.emailuser.value,
        password:event.target.password.value,
        startdate: date,
        description: event.target.descriptionuser.value,
        phone: event.target.phonenewuser.value,
        status: event.target.statususer.value
    }
    if(dataUser.name === '' || dataUser.email === '' ||
    String(dataUser.startdate) === '' || dataUser.description === '' ||
    dataUser.email === '' ||
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(dataUser.email) === false
    )
        {
        if(dataUser.name === ''){
            Toastify({
                text: "Name: a name is needed",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(dataUser.email === ''){
            Toastify({
                text: "Email: an email is required",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }else{
            if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(dataUser.email) === false){
                Toastify({
                    text: "Email: invalid email format",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }
        }

        if(String(dataUser.startdate) === ''){
            Toastify({
                text: "Start Date: a start date is required",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
        if(dataUser.description === ''){
            Toastify({
                text: "Description: a user description is required",
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
        if(dataUser.phone.length > 1 &&
            dataUser.phone.length < 6){
            dataUser = {
                ...dataUser,
                phone: 'none number phone'
            }
        }
        fetchnewUser(dataUser)
        return true
    }
}

export default handlesubmitnewUser