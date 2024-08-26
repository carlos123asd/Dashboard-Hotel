import Toastify from 'toastify-js'

const editUser = (user,values,message) => {
    fetch(`http://localhost:3004/employee/${user.id}`,{
    method: 'PUT',
    body: JSON.stringify({
        ...user,
        ...values
    }), //Objeto -> JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
    }).then(response => {
        if(response.ok){
            console.log(response.json())
            Toastify({
                text: message,
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

export default editUser