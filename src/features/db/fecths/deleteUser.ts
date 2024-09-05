import Toastify from 'toastify-js'

const deleteUser = (userid:string) => {
    fetch(`http://localhost:3004/employee/${userid}`,{
        method: 'DELETE'
    }).then(response => {
        if(response.ok){
            Toastify({
                text: "User Deleted Successfully",
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

export default deleteUser