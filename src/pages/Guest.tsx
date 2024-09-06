import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import { useEffect, useState } from "react";
import { appSelector } from "../features/hooks/hooks";


export default function Guest(){
    const columns = ['Name','Job Desk','Contact','Status']
    const filterstop = ['All Employee','Active Employee','Inactive Employee']
    const filterTopEmployee = appSelector(state => state.filterToptable.orderby)
    const selectorDbData = appSelector(state => state.db.data.employee);
    const [dataemployee,setDataemployee] = useState(selectorDbData)
    
    /*
    useEffect(() => {
        setDataemployee(selectorDbData)
    },[])*/

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

    return <>
        <ContentPageMain>
            <div contentflex='true'>
                <FilterTableTop title={filterstop}/>
                <BtnTableTopNew title='New Employee' />
            </div>
            <Table columns={columns} data={dataemployee} />
        </ContentPageMain>
    </>
}