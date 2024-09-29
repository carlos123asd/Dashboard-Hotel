import Toastify from 'toastify-js'

const token = localStorage.getItem('TOKEN_AUTH')
const updateStatusfetchMessage = (id:string,type:string,notification:string) => {
        fetch(`http://localhost:3000/messages/contact/edit/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                status: type
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            }).then(response => {
                if(response.ok){
                    console.log(response.json())
                    Toastify({
                        text: notification,
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

export default updateStatusfetchMessage