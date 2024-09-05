import Toastify from 'toastify-js'
import Employee from '../../class/Employee';
import editUser from '../db/fecths/editUser';

export interface valuesEditUser {
    id:string
    photo:string[]
    name:string
    email:string
    startdate:string
    description:string
    phone:string
    status:string
}

const handleValidateFormEditUser = (objedtEdit:Employee,valuesForEdit:valuesEditUser) => {
    if(/^[0-9]*$/.test(valuesForEdit.name) === true || 
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valuesForEdit.email) === false)
        {
            if(/^[0-9]*$/.test(valuesForEdit.name) === true){
                Toastify({
                    text: "Name: Invalid name format, without numbers",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }

            if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valuesForEdit.email) === false){
                Toastify({
                    text: "Email: Invalid email format",
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
        if(valuesForEdit.phone.length > 1 &&
            valuesForEdit.phone.length < 6){
                valuesForEdit = {
                ...valuesForEdit,
                phone: 'none number phone'
            }
        }
        editUser(objedtEdit,valuesForEdit)
        return true
    }
}

export default handleValidateFormEditUser