import BtnTableTopNew from "../components/BtnTableTopNew";
import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/booking.json'
import FilterTableTop from "../components/FilterTableTop";

export default function Booking(){
    const columns = ['Guest','Order Date','Check in','Check out','Special Request','Room Type','Status',' ']
    const filterstop = ['All Bookings','Checking In','Checking Out','In Progress']
    return <>
       <ContentPageMain>
            <div contentflex='true'>
                <FilterTableTop title={filterstop}></FilterTableTop>
                <BtnTableTopNew title='New Booking'/>
            </div>
            <Table columns={columns} data={data}/>
        </ContentPageMain>
    </>
}