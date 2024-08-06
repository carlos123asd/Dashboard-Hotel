import Table from "../components/Table";
import { ContentPageMain } from "../styles/nav/nav";
import data from '../data/room.json'
import BtnTableTopNew from "../components/BtnTableTopNew";

export default function Room(){
    const columns = ['Room Name','Room Type','Room Floor','Facilities','Price','Offer Price','Status',' ']
    return <>
        <ContentPageMain>
            <BtnTableTopNew />
            <Table columns={columns} data={data}/>
        </ContentPageMain>
    </>
}