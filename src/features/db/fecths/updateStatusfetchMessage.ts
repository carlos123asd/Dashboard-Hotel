import Toastify from 'toastify-js'
import Message from '../../../class/CMessage'

const token = localStorage.getItem('TOKEN_AUTH')
const updateStatusfetchMessage = (message:Message,type:string,notification:string) => {
    console.log(notification)
        fetch(`http://localhost:3000/messages/contact/edit/${message._id}`,{
            method: 'PUT',
            body: JSON.stringify({
                ...message,
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