import iconmessage from '../assets/imgs/menu/mensaje.svg'
import iconnotification from '../assets/imgs/menu/notification.svg'
import iconlogout from '../assets/imgs/menu/logout.svg'
import iconmenu from '../assets/imgs/menu/menu.svg'

import {
    ContentNavMain,
    ContentNavImg,
    ContentNavTit
} from '../styles/nav/nav'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Nav(){
    const [vertical,setVertical] = useState(false);
    const [style,setStyle] = useState({'padding-left': '5%'});
    const [styleleft,setStyleleft] = useState({'left': '-5%'});
    const navigate = useNavigate();

    const showNavVertical = () => {
        if(vertical === false){
            setStyle({
                'padding-left': '5%'
            })
            setStyleleft({
                'left': '-5%'
            })
            setVertical(true)
        }
        else if(vertical === true){
            setStyle(
                {
                    'padding-left': '25%'
                }
            )
            setStyleleft({
                'left': '0%'
            })
            setVertical(false)
        }
    }

    const logout = () => {
        Toastify({
            text: "Hasta Luego 👋🏻",
            duration: 1000,
            gravity: 'top',
            position: 'center',
            style:{
                background: '#135846'
            }
            }).showToast();

        setTimeout(() => {
            navigate('/')
        },1000)
    }

    return <>
        <ContentNavMain>
            <div style={style}>
                <img onClick={showNavVertical} src={iconmenu} alt="Menu" />
                <ContentNavTit>Dashboard</ContentNavTit>
            </div>
            
            <div style={styleleft}>
                <ContentNavImg><img width={26} height={35} src={iconmessage} alt="Messages" /></ContentNavImg>
                <ContentNavImg><img width={26} height={35} src={iconnotification} alt="Notifications" /></ContentNavImg>
                <ContentNavImg onClick={logout} className='margin-2'><img width={22} height={31} src={iconlogout} alt="Log Out" /></ContentNavImg>
            </div>
        </ContentNavMain>
    </>
}