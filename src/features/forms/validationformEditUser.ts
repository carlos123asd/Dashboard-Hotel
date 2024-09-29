import Toastify from 'toastify-js'
import Employee from '../../class/CEmployee';
import editUser from '../db/fecths/editUser';
import { valuesEditUser } from '../../interfaces/InterfacePropsValidateFormEditUser';

const handleValidateFormEditUser = (id:string,valuesForEdit:valuesEditUser) => {
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
        editUser(id,valuesForEdit)
        return true
    }
}

export default handleValidateFormEditUser