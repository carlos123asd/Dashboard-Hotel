import Toastify from 'toastify-js'
import Message from '../../../class/Message'

const updateStatusfetchMessage = (message:Message,type:string,notification:string) => {
    console.log(notification)
        fetch(`http://localhost:3004/comment/${message.id}`,{
            method: 'PUT',
            body: JSON.stringify({
                ...message,
                status: type
            }), //Objeto -> JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
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