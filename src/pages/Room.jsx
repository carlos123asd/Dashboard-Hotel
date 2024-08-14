import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/room.json'
import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";

export default function Room(){
    const columns = ['Room Name','Room Type','Room Floor','Facilities','Price','Offer Price','Status',' ']
    const filterstop = ['All Rooms','Avaible Room','Inactive Room']
    const filtername = useSelector(state => state.filterToptable.orderby)
    const [dataroom,setDataroom] = useState(data)

    useEffect(() => {
        if(filtername === 'All Rooms'){
            setDataroom(data)
        }
        else if(filtername === 'Avaible Room'){
            setDataroom(data.filter(room => {
                return room.status === 'Available'
            }))
        }else if(filtername === 'Inactive Room'){
            setDataroom(data.filter(room => {
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