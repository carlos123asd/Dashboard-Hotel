import FilterTableTop from "../components/FilterTableTop";
import Review from "../components/Review";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import { useEffect, useState } from "react";
import { appSelector } from "../features/hooks/hooks";


export default function Concierge(){

    const filterstop = ['All customer','Published','Archived']
    const columns = ['Order ID','Date','Customer','Comment','Action']
    const filetstatus = appSelector(state => state.filterToptable.orderby)

    const selectorDbData = appSelector(state => state.db.data.comment);
    const [datamessage,setDatamessage] = useState(selectorDbData)

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

    return <>
        <ContentPageMain>
            <Review data={datamessage} />
            <div contentflex='true'>
                <FilterTableTop title={filterstop} />
            </div>
            <Table columns={columns} data={datamessage} />
        </ContentPageMain>
    </>
}
