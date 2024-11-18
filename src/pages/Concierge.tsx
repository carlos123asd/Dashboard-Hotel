import FilterTableTop from "../components/FilterTableTop";
import Review from "../components/Review";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import { useEffect, useState } from "react";
import { appDispatch, appSelector } from "../features/hooks/hooks";
import { dbThunkMessage } from "../features/db/thunks/dbThunkMessage";


export default function Concierge(){

    const filterstop = ['All customer','Published','Archived']
    const columns = ['Order ID','Date','Customer','Comment','Action']
    const filetstatus = appSelector(state => state.filterToptable.orderby)

    const selectorDbData = appSelector(state => state.dbMessage.data);
    const selectorDbStatus = appSelector(state => state.dbMessage.status);
    const selectorDbError = appSelector(state => state.dbMessage.error);
    const [datamessage,setDatamessage] = useState(selectorDbData)
    const dispatch = appDispatch()
    const [loading,setLoading] = useState<boolean>(true)
 
    useEffect(() =>{
        if(selectorDbStatus === 'idle'){
            dispatch(dbThunkMessage());
        }else if(selectorDbStatus === 'fulfilled'){
            setDatamessage(selectorDbData);
            setLoading(false);
        }else if(selectorDbStatus === 'rejected'){
            console.error(selectorDbError)
        }
    },[selectorDbStatus])

    useEffect(() => {
        if(filetstatus === 'All customer'){
            setDatamessage(selectorDbData)
        }
        else if(filetstatus === 'Published'){
            setDatamessage(selectorDbData.filter(room => {
                return room.status === 'published'
            }).sort((a, b) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime()))
        }else if(filetstatus === 'Archived'){
            setDatamessage(selectorDbData.filter(room => {
                return room.status === 'archived'
            }).sort((a, b) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime()))
        }
    },[filetstatus])

    if(loading === false){
        return <>
            <ContentPageMain>
                <Review />
                <div>
                    <FilterTableTop title={filterstop} />
                </div>
                <Table columns={columns} data={datamessage} />
            </ContentPageMain>
        </>
    }else{
        <>
            <h1>Loading...</h1>
        </>
    }
}
