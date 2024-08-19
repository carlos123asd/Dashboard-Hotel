import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import FilterTableTop from "../components/FilterTableTop";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Booking(){
    const columns = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop = ['All Bookings','Checking In','Checking Out','In Progress']
    const filtername = useSelector(state => state.filterToptable.orderby)
    const selectorDbData = useSelector(state => state.db.data);
    const [databooking,setDatabooking] = useState([])

    useEffect(() => {
        setDatabooking(selectorDbData.bookings)
    },[])

    useEffect(() => {
        if(filtername === 'All Bookings'){
            setDatabooking(selectorDbData.bookings)
        }
        else if(filtername === 'Checking In'){
            setDatabooking(selectorDbData.bookings.filter(room => {
                return room.status === 'Check In'
            }))
        }else if(filtername === 'Checking Out'){
            setDatabooking(selectorDbData.bookings.filter(room => {
                return room.status === 'Check Out'
            }))
        }else if(filtername === 'In Progress'){
            setDatabooking(selectorDbData.bookings.filter(room => {
                return room.status === 'In Progress'
            }))
        }
    }, [filtername])

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