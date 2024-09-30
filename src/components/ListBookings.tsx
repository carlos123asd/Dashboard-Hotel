import { Fragment, useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import icon from '../assets/imgs/logo.svg'
import { appSelector } from '../features/hooks/hooks';
import { styleListBookingMessage } from '../interfaces/styleListBookingMessage';

export default function ListBookings(){

    const selectorDBBookings = appSelector(state => state.dbBooking.data)
    const selectorShowBookingList = appSelector(state => state.notification.show)
    const filterbymonthActual = selectorDBBookings.filter((booking) => {
        return new Date(booking.orderDate).getMonth() === new Date().getMonth()
    })
    
    const [styleList,setStyleList] = useState<styleListBookingMessage>({
        borderRadius: 12,
        overflowY: 'auto',
        border: '1px solid rgb(223, 226, 231)',
        boxShadow: 'rgba(170, 180, 190, 0.3) 0px 4px 20px',
        height: '30em',
        display: 'none'
    })

    useEffect(() => {
        if(selectorShowBookingList === true){
            setStyleList({
                borderRadius: 12,
                overflowY: 'auto',
                border: '1px solid rgb(223, 226, 231)',
                boxShadow: 'rgba(170, 180, 190, 0.3) 0px 4px 20px',
                height: '30em',
                display: 'block'
            })
        }else{
            setStyleList({
                borderRadius: 12,
                overflowY: 'auto',
                border: '1px solid rgb(223, 226, 231)',
                boxShadow: 'rgba(170, 180, 190, 0.3) 0px 4px 20px',
                height: '30em',
                display: 'none'
            })
        }
    },[selectorShowBookingList])

    return <>
        <List sx={{ width: '15em', maxWidth: 360, bgcolor: 'background.paper'}} style={styleList}>
            {
                filterbymonthActual.map((booking) => {
                    return <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={icon} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={`Booking - ${booking.roomType}`}
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {booking.guest}
                                        <br />
                                    </Typography>
                                    {`Check In: ${booking.checkin}`} {(booking.specialRequest !== '' ) ? `- ${booking.specialRequest}` : ''}
                                </Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                })
            }
        </List>
    </>
}