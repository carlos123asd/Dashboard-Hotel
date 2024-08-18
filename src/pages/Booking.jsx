import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/booking.json'
import FilterTableTop from "../components/FilterTableTop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dbThunk } from "../features/db/dbThunk";
import { resetStatus } from "../features/db/dbSlice";

export default function Booking(){
    const columns = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop = ['All Bookings','Checking In','Checking Out','In Progress']
    const filtername = useSelector(state => state.filterToptable.orderby)
    const stateDbStatus = useSelector(state => state.db.status);
    const selectorDbData = useSelector(state => state.db.data);
    const selectorDbError = useSelector(state => state.db.error);
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true);
    const [databooking,setDatabooking] = useState([])

    console.log(stateDbStatus)

    useEffect(() =>{
        if(stateDbStatus === 'idle'){
            dispatch(dbThunk('bookings'));
        }else if(stateDbStatus === 'fulfilled'){
            setLoading(false);
            setDatabooking(selectorDbData)
        }else if(stateDbStatus === 'rejected'){
            console.log(selectorDbError)
        }
    },[stateDbStatus])

    useEffect(() => {
        if(filtername === 'All Bookings'){
            setDatabooking(data)
        }
        else if(filtername === 'Checking In'){
            setDatabooking(data.filter(room => {
                return room.status === 'Check In'
            }))
        }else if(filtername === 'Checking Out'){
            setDatabooking(data.filter(room => {
                return room.status === 'Check Out'
            }))
        }else if(filtername === 'In Progress'){
            setDatabooking(data.filter(room => {
                return room.status === 'In Progress'
            }))
        }
    }, [filtername])

    console.log(databooking)

    if(loading === false){
        return <>
        <ContentPageMain>
                <div contentflex='true'>
                    <FilterTableTop title={filterstop}></FilterTableTop>
                    <BtnTableTopNew title='New Booking' databooking={databooking}/>
                </div>
                <Table columns={columns} data={databooking}/>
            </ContentPageMain>
        </>
    }
}