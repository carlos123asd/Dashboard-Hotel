import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import { useEffect, useState } from "react";
import { appDispatch, appSelector } from "../features/hooks/hooks";
import { dbThunkRoom } from "../features/db/thunks/dbThunkRoom";

export default function Room(){
    const columns:string[] = ['Room Name','Room Type','Facilities','Price','Offer Price','Cancellation','Description','Status',' ']
    const filterstop:string[] = ['All Rooms','Avaible Room','Inactive Room']
    //const [filterstop,setfilterstop] = useState('All Rooms')
    /*const handlesortby = () => {
        setfilterstop()
    }*/
   //De hijo a padre handlesortby -> pasar por props a FilterTableTop
    const filtername = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.dbRoom.data);
    const selectorStatus = appSelector(state => state.dbRoom.status);
    const selectorError = appSelector(state => state.dbRoom.error);
    const [dataroom,setDataroom] = useState<{}|[]>(selectorDbData)
    const dispatch = appDispatch()
    const [loading,setLoading] = useState<boolean>(true)
     
    useEffect(() =>{
        if(selectorStatus === 'idle'){
            dispatch(dbThunkRoom());
        }else if(selectorStatus === 'fulfilled'){
            setLoading(false);
        }else if(selectorStatus === 'rejected'){
            console.error(selectorError)
        }
    },[selectorStatus])

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
    }else{
        return <>
            <h1>Loading...</h1>
        </>
    }
}