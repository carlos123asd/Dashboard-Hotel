import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import FilterTableTop from "../components/FilterTableTop";
import { useEffect, useState } from "react";
import { appDispatch, appSelector } from "../features/hooks/hooks";
import CBooking from "../class/CBooking";
import { dbThunkBooking } from "../features/db/thunks/dbThunkBooking";

export default function Booking(){
    const columns: string[] = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop: string[] = ['All Bookings','Checking In','Checking Out','In Progress']
    const filtername = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.dbBooking.data);
    const selectorErrorDb = appSelector(state => state.dbBooking.error)
    const stateDispatchData = appSelector(state => state.dbBooking.status);
    const dispatch = appDispatch()
    const [databooking,setDatabooking] = useState<CBooking[]>(selectorDbData)
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(() =>{
        if(stateDispatchData === 'idle'){
            dispatch(dbThunkBooking());
        }else if(stateDispatchData === 'fulfilled'){
            setLoading(false);
            console.log(selectorDbData)
        }else if(stateDispatchData === 'rejected'){
            console.error(selectorErrorDb)
        }
    },[stateDispatchData])

    useEffect(() => {
        if(filtername === 'All Bookings'){
            setDatabooking(selectorDbData)
        }
        else if(filtername === 'Checking In'){
            setDatabooking(selectorDbData.filter((booking:CBooking) => {
                return booking.status === 'Check In'
            }))
        }else if(filtername === 'Checking Out'){
            setDatabooking(selectorDbData.filter((booking:CBooking) => {
                return booking.status === 'Check Out'
            }))
        }else if(filtername === 'In Progress'){
            setDatabooking(selectorDbData.filter((booking:CBooking) => {
                return booking.status === 'In Progress'
            }))
        }
    }, [filtername])

//databooking={databooking}
    if(loading === true){
        return <>
            <h1>Loading...</h1>
        </>
    }else{
        return <>
        <ContentPageMain>
                {/* contentflex='true' */}
                <div>
                    <FilterTableTop title={filterstop}></FilterTableTop>
                    <BtnTableTopNew title='New Booking'/>
                </div>
                <Table columns={columns} data={databooking}/>
            </ContentPageMain>
        </>
    }
}