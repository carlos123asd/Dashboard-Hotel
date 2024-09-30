import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import { useEffect, useState } from "react";
import { appDispatch, appSelector } from "../features/hooks/hooks";
import { dbThunkUser } from "../features/db/thunks/dbThunkUsers";


export default function Guest(){
    const columns = ['Name','Job Desk','Contact','Status']
    const filterstop = ['All Employee','Active Employee','Inactive Employee']
    const filterTopEmployee = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.dbUser.data);
    const selectorDbStatus = appSelector(state => state.dbUser.status);
    const selectorDbError = appSelector(state => state.dbUser.error);
    const dispatch = appDispatch()
    const [dataemployee,setDataemployee] = useState(selectorDbData)
    const [loading,setLoading] = useState<boolean>(true)
    
    useEffect(() =>{
        if(selectorDbStatus === 'idle'){
            dispatch(dbThunkUser());
        }else if(selectorDbStatus === 'fulfilled'){
            setDataemployee(selectorDbData);
            setLoading(false);
        }else if(selectorDbStatus === 'rejected'){
            console.error(selectorDbError)
        }
    },[selectorDbStatus])

    useEffect(() => {
        if(filterTopEmployee === 'All Employee'){
            setDataemployee(selectorDbData);
        }
        else if(filterTopEmployee === 'Active Employee'){
            setDataemployee(selectorDbData.filter(employee => {
                return employee.status === 'active'
            }))
        }else if(filterTopEmployee === 'Inactive Employee'){
            setDataemployee(selectorDbData.filter(employee => {
                return employee.status === 'inactive'
            }))
        }
    },[filterTopEmployee])

    if(loading === false){
        return <>
            <ContentPageMain>
                <div contentflex='true'>
                    <FilterTableTop title={filterstop}/>
                    <BtnTableTopNew title='New Employee' />
                </div>
                <Table columns={columns} data={dataemployee} />
            </ContentPageMain>
        </>
    }else{
        <>
            <h1>Loading...</h1>
        </>
    }
}