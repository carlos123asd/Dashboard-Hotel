import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { dbThunk } from "../features/db/dbThunk";
import { resetStatus } from "../features/db/dbSlice";

export default function Room(){
    const columns = ['Room Name','Room Type','Facilities','Price','Offer Price','Status',' ']
    const filterstop = ['All Rooms','Avaible Room','Inactive Room']
    const dispatch = useDispatch()
    const filtername = useSelector(state => state.filterToptable.orderby)
    const stateDbStatus = useSelector(state => state.db.status);
    const selectorDbData = useSelector(state => state.db.data);
    const selectorDbError = useSelector(state => state.db.error);
    const [loading,setLoading] = useState(true);
    const [dataroom,setDataroom] = useState([])
    
    useEffect(() =>{
        if(stateDbStatus === 'idle'){
            dispatch(dbThunk('rooms'));
        }else if(stateDbStatus === 'fulfilled'){
            setLoading(false);
            setDataroom(selectorDbData)
        }else if(stateDbStatus === 'rejected'){
            console.log(selectorDbError)
        }
    },[stateDbStatus])
     
    useEffect(() => {
        if(filtername === 'All Rooms'){
            setDataroom(selectorDbData);
        }
        else if(filtername === 'Avaible Room'){
           setDataroom(selectorDbData.filter(room => {
                return room.status === 'Available'
            }))
        }else if(filtername === 'Inactive Room'){
            setDataroom(selectorDbData.filter(room => {
                return room.status === 'Booked'
            }))
        }
    },[filtername])

    if(loading === false){
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
}