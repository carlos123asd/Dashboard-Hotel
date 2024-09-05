import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import { useEffect, useState } from "react";
import { appSelector } from "../features/hooks/hooks";


export default function Room(){
    const columns = ['Room Name','Room Type','Facilities','Price','Offer Price','Cancellation','Description','Status',' ']
    const filterstop = ['All Rooms','Avaible Room','Inactive Room']
    //const [filterstop,setfilterstop] = useState('All Rooms')
    /*const handlesortby = () => {
        setfilterstop()
    }*/
   //De hijo a padre handlesortby -> pasar por props a FilterTableTop
    const filtername = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.db.data);
    const [dataroom,setDataroom] = useState(selectorDbData)
    
    useEffect(() => {
        setDataroom(selectorDbData.rooms)
    },[])
     
    useEffect(() => {
        if(filtername === 'All Rooms'){
            setDataroom(selectorDbData.rooms);
        }
        else if(filtername === 'Avaible Room'){
           setDataroom(selectorDbData.rooms.filter(room => {
                return room.status === 'Available'
            }))
        }else if(filtername === 'Inactive Room'){
            setDataroom(selectorDbData.rooms.filter(room => {
                return room.status === 'Booked'
            }))
        }
    },[filtername])

    return <>
        <ContentPageMain>
            <div contentflex='true'>
                <FilterTableTop title={filterstop} />
                <BtnTableTopNew title='New Room' />
            </div>
            <Table columns={columns} data={dataroom} />
        </ContentPageMain>
    </>
}