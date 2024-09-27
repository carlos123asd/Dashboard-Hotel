import Toastify from 'toastify-js'
const token = localStorage.getItem('TOKEN_AUTH')
const deleteUser = (userid:string) => {
    fetch(`http://localhost:3000/users/user/delete/${userid}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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
    }).catch(error => console.error(error))
}

export default deleteUser