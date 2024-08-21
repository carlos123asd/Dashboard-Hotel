import { Fragment, useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import icon from '../assets/imgs/logo.svg'

export default function ListMessage(){
    const selectorDBMessage = useSelector(state => state.db.data.comment)
    const selectorShowBookingList = useSelector(state => state.notification.showListMessage)
    const messagewaiting = selectorDBMessage.filter((message) => {
        return message.status === 'none'
    })
    const [styleList,setStyleList] = useState({
        borderRadius: 12,
        //left: 0,
        overflowY: 'auto',
        //position: 'absolute',
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
                messagewaiting.map((message) => {
                    return <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={icon} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={`By - ${message.customer}`}
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {message.date}
                                        <br />
                                    </Typography>
                                    {`Reason: ${message.reason}`}<br />{`Message: ${message.comment}`}
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