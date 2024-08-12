import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/room.json'
import BtnTableTopNew from "../components/BtnTableTopNew";
import FilterTableTop from "../components/FilterTableTop";

export default function Room(){
    const columns = ['Room Name','Room Type','Room Floor','Facilities','Price','Offer Price','Status',' ']
    const filterstop = ['All Rooms','Avaible Room','Inactive Room']
    return <>
        <ContentPageMain>
            <div contentflex='true'>
                <FilterTableTop title={filterstop}></FilterTableTop>
                <BtnTableTopNew title='New Room'/>
            </div>
            <Table columns={columns} data={data}/>
        </ContentPageMain>
    </>
}