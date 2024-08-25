import Toastify from 'toastify-js'
import newEmployee from '../db/fecths/newEmployee'

const validationNewuser = async (event) => {
    if((event.name).toString() === '' || event.email === '' ||
        event.startdate === '' || event.description === '' || event.status === '' ||
        /^[A-Z ]+$/i.test(event.name) === false ||
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(event.email) === false )
        {
        if(event.name !== ""){
            if(/^[A-Z ]+$/i.test(event.name) === false){
                Toastify({
                    text: "Name: Name invalid, only chars",
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
                text: "Name: Necessary value",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(event.email !== ""){
            if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(event.email) === false){
                Toastify({
                    text: "Email: Mail invalid",
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
                text: "Mail: Necessary value",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(event.description === ''){
            Toastify({
                text: "Description: Necessary description of the employee",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(event.status === ''){
            Toastify({
                text: "Status Employee: Necessary initial status",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }

        if(event.startdate === ''){
            Toastify({
                text: "Start Date: Necessary Start date",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#E23428'
                }
            }).showToast();
        }
    }else{
        newEmployee(event)
    }
}

export default validationNewuser;