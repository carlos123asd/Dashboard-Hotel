import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import FilterTableTop from "../components/FilterTableTop";
import { useEffect, useState } from "react";
import { appSelector } from "../features/hooks/hooks";
import CBooking from "../class/CBooking";

export default function Booking(){
    const columns: string[] = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop: string[] = ['All Bookings','Checking In','Checking Out','In Progress']
    const filtername = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.db.data);
    const [databooking,setDatabooking] = useState<CBooking[]>(selectorDbData.bookings)

    /*
    useEffect(() => {
        setDatabooking(selectorDbData.bookings)
    },[])*/

    useEffect(() => {
        if(filtername === 'All Bookings'){
            setDatabooking(selectorDbData.bookings)
        }
        else if(filtername === 'Checking In'){
            setDatabooking(selectorDbData.bookings.filter((booking:CBooking) => {
                return booking.status === 'Check In'
            }))
        }else if(filtername === 'Checking Out'){
            setDatabooking(selectorDbData.bookings.filter((booking:CBooking) => {
                return booking.status === 'Check Out'
            }))
        }else if(filtername === 'In Progress'){
            setDatabooking(selectorDbData.bookings.filter((booking:CBooking) => {
                return booking.status === 'In Progress'
            }))
        }
    }, [filtername])

//databooking={databooking}

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