import FilterTableTop from "../components/FilterTableTop";
import Review from "../components/Review";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import comment from '../data/comment.json'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Concierge(){

    const filterstop = ['All customer','Published','Archived']
    const columns = ['Order ID','Date','Customer','Comment','Action']
    const filetstatus = useSelector(state => state.filterToptable.orderby)
    const datefilter = comment.filter((message) => {
        return message.status === 'none'
    })
    const [datamessage,setDatamessage] = useState(datefilter.sort((a, b) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])))

    useEffect(() => {
        if(filetstatus === 'All customer'){
            setDatamessage(comment.filter((message) => {
                return message.status === 'none'
            }).sort((a, b) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])))
        }
        else if(filetstatus === 'Published'){
            setDatamessage(comment.filter(room => {
                return room.status === 'published'
            }).sort((a, b) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])))
        }else if(filetstatus === 'Archived'){
            setDatamessage(comment.filter(room => {
                return room.status === 'archived'
            }).sort((a, b) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])))
        }
    },[filetstatus])

    return <>
        <ContentPageMain>
            <Review></Review>
            <div contentflex='true'>
                <FilterTableTop title={filterstop} />
            </div>
            <Table columns={columns} data={datamessage} />
        </ContentPageMain>
    </>
}
