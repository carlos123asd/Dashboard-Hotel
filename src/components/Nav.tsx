import iconmessage from '../assets/imgs/menu/mensaje.svg'
import iconnotification from '../assets/imgs/menu/notification.svg'
import iconlogout from '../assets/imgs/menu/logout.svg'
import iconmenu from '../assets/imgs/menu/menu.svg'

import {
    ContentNavMain,
    ContentNavImg,
    ContentNavTit
} from '../styles/nav/nav'
import { useLocation, useNavigate } from 'react-router-dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useContextAuth } from '../features/context/AuthContext'
import ListBookings from './ListBookings'
import { useDispatch } from 'react-redux'
import { hidemessage, hidenotBookings, shownotificationBooking, shownotificationMessage } from '../features/TopMenu/NotificationSlice'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import ListMessage from './ListMessage'
import { showMenu } from '../features/db/menu/menuSlice'
import { appDispatch, appSelector } from '../features/hooks/hooks'
import { InterfacePropsStyleNav } from '../interfaces/InterfacePropsStyleNav'
import { useEffect, useState } from 'react'
import { dbThunkBooking } from '../features/db/thunks/dbThunkBooking'
import { dbThunkMessage } from '../features/db/thunks/dbThunkMessage'

export default function Nav(props:InterfacePropsStyleNav){
    const {stylenav} = props
    const navigate = useNavigate();
    const path = useLocation();
    const dispatchNav = useDispatch();
    const dispatchApp = appDispatch();
    const { dispatch }:any = useContextAuth();
    //Booking
    const selectorDbDataBooking = appSelector(state => state.dbBooking.data);
    const selectorErrorDbBooking = appSelector(state => state.dbBooking.error)
    const selectorStateBooking = appSelector(state => state.dbBooking.status);
    //Message
    const selectorDbDataMessage = appSelector(state => state.dbMessage.data);
    const selectorErrorDbMessage = appSelector(state => state.dbMessage.error);
    const selectorStateMessage = appSelector(state => state.dbMessage.status);
    const [loading,setLoading] = useState<boolean>(true)
  
    const filterbymonthActualNum = (selectorDbDataBooking.filter((booking) => {
        return new Date(booking.orderDate).getMonth() === new Date().getMonth()
    })).length
    const Messagewaiting = (selectorDbDataMessage.filter((message) => {
        return message.status === 'none'
    })).length

    const NotificationTooltip = styled(({ className, ...props }:TooltipProps|any) => (
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
        dispatchNav(showMenu())
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
            navigate('/login')
    }

    const handleShowListBookings = () => {
        dispatchNav(shownotificationBooking())
        dispatchNav(hidemessage(false))
    }
    const handleShowListMessage = () => {
        dispatchNav(shownotificationMessage())
        dispatchNav(hidenotBookings(false))
    }

    useEffect(() =>{
        if(selectorStateBooking === 'idle' && selectorStateMessage === 'idle'){
            dispatchApp(dbThunkBooking());
            dispatchApp(dbThunkMessage());
        }else if(selectorStateBooking === 'fulfilled' && selectorStateMessage === 'fulfilled'){
            setLoading(false);
        }else if(selectorStateBooking === 'rejected' || selectorStateMessage === 'rejected'){
            if(selectorStateBooking === 'rejected'){
                console.error(selectorErrorDbBooking)
            }
            if(selectorStateMessage === 'rejected'){
                console.error(selectorErrorDbMessage)
            }
        }
    },[selectorStateBooking,selectorStateMessage])

    return <>
        <ContentNavMain style={stylenav}>
            <div className='titpath'>
                <img onClick={showNavVertical} src={iconmenu} alt="Menu" />
                <ContentNavTit>{path.pathname === '/' ? 'Dashboard' : (path.pathname.split('/')[1])[0].toUpperCase()+(path.pathname.split('/')[1]).slice(1)}</ContentNavTit>
            </div>
            
            <div className='pos-relative'>
                <ContentNavImg>
                    <NotificationTooltip title="Latest Review by Customers" onClick={handleShowListMessage} className='contennotification'>
                        <img width={40} height={40} src={iconmessage} alt="Messages" />
                        <div className='contennotification__num'>{Messagewaiting}</div>
                    </NotificationTooltip>
                    <div style={{left: 0,position: 'absolute',zIndex: "1000"}}>
                        <ListMessage />
                    </div>
                </ContentNavImg>

                <ContentNavImg>
                    <NotificationTooltip title="Reservations for this month" onClick={handleShowListBookings} className='contennotification'>
                        <img width={40} height={40} src={iconnotification} alt="Notifications" />
                        <div className='contennotification__num'>{filterbymonthActualNum}</div>
                    </NotificationTooltip>
                    <div style={{left: 0,position: 'absolute',zIndex: "1000"}}>
                        <ListBookings />
                    </div>
                </ContentNavImg>

                <ContentNavImg id='logoutt' onClick={logout} className='margin-2'>
                    <NotificationTooltip title="Log Out">
                        <img width={40} height={40} src={iconlogout} alt="Log Out" />
                    </NotificationTooltip>
                </ContentNavImg>
            </div>
        </ContentNavMain>
    </>
}
