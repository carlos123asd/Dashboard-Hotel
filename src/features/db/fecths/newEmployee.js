import Toastify from 'toastify-js'

const newEmployee = (employee) => {
    fetch('http://localhost:3004/employee',{
        method: 'POST',
        body: JSON.stringify(employee), //Objeto -> JSON
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        if(response.ok){
            Toastify({
                text: "Employee Created Successfully",
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

export default newEmployee