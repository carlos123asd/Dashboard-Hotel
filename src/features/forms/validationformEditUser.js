import Toastify from 'toastify-js'
import editUser from '../db/fecths/editUser';

const validationEdituser = async (user,event) => {
    if((event.name).toString() === '' || event.email === '' ||
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
    }else{
        editUser(user,event,'User edited correctly')
    }
}

export default validationEdituser;