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
import { useLocation, useNavigate } from 'react-router-dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useContextAuth } from '../features/context/AuthContext'
import ListBookings from './ListBookings'
import { useDispatch, useSelector } from 'react-redux'
import { hidemessage, hidenotBookings, shownotificationBooking, shownotificationMessage } from '../features/TopMenu/NotificationSlice'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ListMessage from './ListMessage'

export default function Nav(){
    const [vertical,setVertical] = useState(false);
    const [style,setStyle] = useState({'padding-left': '5%'});
    const [styleleft,setStyleleft] = useState({'left': '-5%'});
    const navigate = useNavigate();
    const path = useLocation();
    const dispatchNav = useDispatch();
    const { dispatch } = useContextAuth();
    const selectorDBBookings = useSelector(state => state.db.data.bookings)
    const selectorDBMessage = useSelector(state => state.db.data.comment)
    const filterbymonthActualNum = (selectorDBBookings.filter((booking) => {
        return new Date(booking.orderDate).getMonth() === new Date().getMonth()
    })).length
    const Messagewaiting = (selectorDBMessage.filter((message) => {
        return message.status === 'none'
    })).length


    const NotificationTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#135846',
          color: '#fff',
          fontFamily:'poppinssemibold',
          boxShadow: theme.shadows[1],
          fontSize: 11,
        },
      }));


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
        dispatch({
            type: 'LOGOUT'
        })
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
            navigate('/login')
        },1000)
    }

    const handleShowListBookings = () => {
        dispatchNav(shownotificationBooking())
        dispatchNav(hidemessage(false))
    }
    const handleShowListMessage = () => {
        dispatchNav(shownotificationMessage())
        dispatchNav(hidenotBookings(false))
        
    }

    return <>
        <ContentNavMain>
            <div style={style}>
                <img onClick={showNavVertical} src={iconmenu} alt="Menu" />
                <ContentNavTit>{path.pathname === '/' ? 'Dashboard' : (path.pathname.split('/')[1])[0].toUpperCase()+(path.pathname.split('/')[1]).slice(1)}</ContentNavTit>
            </div>
            
            <div className='pos-relative' style={styleleft}>
                <ContentNavImg>
                    <NotificationTooltip title="Latest Review by Customers" onClick={handleShowListMessage} className='contennotification'>
                        <img width={26} height={35} src={iconmessage} alt="Messages" />
                        <div className='contennotification__num'>{Messagewaiting}</div>
                    </NotificationTooltip>
                    <div style={{left: 0,position: 'absolute'}}>
                        <ListMessage />
                    </div>
                </ContentNavImg>

                <ContentNavImg>
                    <NotificationTooltip title="Reservations for this month" onClick={handleShowListBookings} className='contennotification'>
                        <img width={26} height={35} src={iconnotification} alt="Notifications" />
                        <div className='contennotification__num'>{filterbymonthActualNum}</div>
                    </NotificationTooltip>
                    <div style={{left: 0,position: 'absolute'}}>
                        <ListBookings />
                    </div>
                </ContentNavImg>

                <ContentNavImg onClick={logout} className='margin-2'>
                    <NotificationTooltip title="Log Out">
                        <img width={22} height={31} src={iconlogout} alt="Log Out" />
                    </NotificationTooltip>
                </ContentNavImg>
            </div>
        </ContentNavMain>
    </>
}