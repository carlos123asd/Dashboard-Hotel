import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/booking.json'
import FilterTableTop from "../components/FilterTableTop";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Booking(){
    const columns = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop = ['All Bookings','Checking In','Checking Out','In Progress']
    const filtername = useSelector(state => state.filterToptable.orderby)
    const [databooking,setDatabooking] = useState(data)

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

    return <>
       <ContentPageMain>
            <div contentflex='true'>
                <FilterTableTop title={filterstop}></FilterTableTop>
                <BtnTableTopNew title='New Booking'/>
            </div>
            <Table columns={columns} data={databooking}/>
        </ContentPageMain>
    </>
}