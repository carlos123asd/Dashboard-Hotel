import { TableObj, TrMainTable, ContentTable, PaginationTable } from "../styles/table/table"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


import { useLocation } from "react-router-dom";
import restart from '../assets/imgs/restart.svg'
import updateStatusfetchMessage from "../features/db/fecths/updateStatusfetchMessage";
import RowTable from "./RowTable";

export default function Table({columns,data}){
    console.log(data)
    const [nextdate,setNextdate] = useState(10);
    const [actualdate,setActualdate] = useState(0);
    const locationname = useLocation().pathname;
    const [desc,setDesc] = useState(false);
    const [descletter,setDescletter] = useState(false);
    const [rotate,setRotate] = useState({});
    const [datastate,setDatastate] = useState(data.map((info) => {
        return info
    }))
    const [lengthdate,setLengthdate] = useState(Math.trunc(datastate.length / 10));
    const [columnsedit,setColumnsedit] = useState(columns)

    useEffect(() => {
        setDatastate(data.map((info) => {
            return info
        }))
    },[data])

    let i = 0
    const nextPaginationData = () => {
        if(nextdate <= data.length){
            setActualdate(actualdate+10);
            setNextdate(nextdate+10);
        }
    }
    const backPaginationData = () => {
        if(actualdate <= data.length && actualdate > 0){
            setActualdate(actualdate-10);
            setNextdate(nextdate-10);
        }
    }
    const numPickedPaginationData = (num) => {
        setActualdate((num * 10) - 10);
        setNextdate(num * 10);
    }

    const othercolumns = (column) => {
        console.log(column)
        if(column === 'Room Type'){
            return <span style={rotate} onClick={handleOrderByLetter} className="filtercolumn"></span>
        }
    }
    const othercolumnsBooking = (column) => {
        if(column === 'Check in'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkin')} className="filtercolumn"></span>
        }else if(column === 'Check out'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkout')} className="filtercolumn"></span>
        }else if(column === 'Order Date'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkdate')} className="filtercolumn"></span>
        }
    }
    const otherStatusMessage = (message) => {
        if(message.status === 'published'){
            return <>
                <span className="controlsmessage controlsmessage--bordernone">Published</span>
                <img onClick={() => handlerestart(message)} src={restart} alt="Unpublish" />
            </>
        }else if(message.status === 'archived'){
            return <>
                <span className="controlsmessage controlsmessage--bordernone" style={{color:'#E23428'}}>Archived</span>
                <img onClick={() => handlerestart(message)} src={restart} alt="Unarchive" />
            </> 
        }
    }
     
    const handlepublish = (message) => {
        updateStatusfetchMessage(message,'publish','Message Published')
    }
    const handlearchive = (message) => {
        updateStatusfetchMessage(message,'archive','Message Archived')
    }
    const handlerestart = (message) => {
        updateStatusfetchMessage(message,'none','Message Restored')
    }

    const rotateiconOrderBy = (order) =>{
        if(order === true){
            setRotate({
                transform: 'rotate(45deg)',
                verticalAlign: 'text-top'
            })
        }else{
            setRotate({
                transform: 'rotate(224deg)',
                verticalAlign: 'sub'
            })
        }
    }

    const handleOrderBy = () => {
        if(desc === false){
            setDesc(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a, b) => parseInt(a.price.split("$")[1])  - parseInt(b.price.split("$")[1])));
        }else{
            setDesc(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a, b) => parseInt(b.price.split("$")[1])  - parseInt(a.price.split("$")[1])));
        }
    }
    const handleOrderByNameEmployee = () => {
        if(desc === false){
            setDesc(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a, b) => a.name.localeCompare(b.name))); 
        }else{
            setDesc(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a, b) => b.name.localeCompare(a.name))); 
        }
    }
    const handleOrderByLetter = () => {
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a, b) => a.typeRoom.localeCompare(b.typeRoom))); 
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a, b) => b.typeRoom.localeCompare(a.typeRoom))); 
        }
    }
    const handleOrderByLetterBooking = () => {
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a, b) => a.guest.localeCompare(b.guest))); 
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a, b) => b.guest.localeCompare(a.guest))); 
        }
    }
    const handleOrderByDate = (typedate) => {
        console.log(datastate.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate)))
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            if(typedate === 'checkin'){
                setDatastate(datastate.sort((a, b) => new Date(a.checkin) - new Date(b.checkin))); 
            }else if(typedate === 'checkout'){
                setDatastate(datastate.sort((a, b) => new Date(a.checkout) - new Date(b.checkout))); 
            }else if(typedate === 'checkdate'){
                setDatastate(datastate.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate))); 
            }
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
            if(typedate === 'checkin'){
                setDatastate(datastate.sort((a, b) => new Date(b.checkin) - new Date(a.checkin))); 
            }else if(typedate === 'checkout'){
                setDatastate(datastate.sort((a, b) => new Date(b.checkout) - new Date(a.checkout))); 
            }else if(typedate === 'checkdate'){
                setDatastate(datastate.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))); 
            }
        }
    }

    console.log(columnsedit)
    
    if(locationname === '/bookings'){
        return <>
        <ContentTable>
            {
                <TableObj>
                    <TrMainTable>
                        {
                            columns.map(column => {
                                return <>
                                    <th className="headercolumn">{column}{column === 'Guest' ? <span style={rotate} onClick={handleOrderByLetterBooking} className="filtercolumn"></span> : othercolumnsBooking(column)}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((booking) => {
                        return <>
                                <RowTable data={booking} />
                        </>
                        })
                    }
                </TableObj>
            }
        </ContentTable>

        <PaginationTable>
            <div onClick={backPaginationData}>Prev</div>
            {
                data.slice(0,lengthdate).map(element => {
                    i++
                    return <>
                        <div valuepagination={i} onClick={(event) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{i}</div>
                    </>
                })
            }
            <div onClick={nextPaginationData}>Next</div>
        </PaginationTable>
        </>
    }else if(locationname === '/room'){
        return <>
        <ContentTable>
            {
                <TableObj>
                    <TrMainTable>
                        {
                            columns.map(column => {
                                return <>
                                    <th className="headercolumn">{column}{column === 'Price' ? <span style={rotate} onClick={handleOrderBy} className="filtercolumn"></span> : othercolumns(column)}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((room) => {
                        return <>
                                <RowTable data={room} />
                        </>
                        })
                    }
                </TableObj>
            }
        </ContentTable>
        <PaginationTable>
            <div onClick={backPaginationData}>Prev</div>
            {
                datastate.slice(0,lengthdate).map((val,index) => {
                    return <>
                        <div valuepagination={index} onClick={(event) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{index}</div>
                    </>
                })
            }
            <div onClick={nextPaginationData}>Next</div>
        </PaginationTable>
        </>
    }else if(locationname === '/contact'){
        return <>
            <ContentTable style={{marginTop:'1em'}}>
                {
                    <TableObj>
                        <TrMainTable>
                            {
                                columns.map(column => {
                                    return <>
                                        <th className="headercolumn">{column}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                        
                        datastate.slice(actualdate,nextdate).map(register => {
                            return <>  
                                <TrMainTable>
                                    <div>
                                        <td>#{register.idmessage}</td>
                                    </div>
                                    <td>{register.date}</td>
                                    <td>{register.customer}</td>
                                    <td>{register.comment}</td>
                                    <td>{register.status === 'none' ? <div><span className="controlsmessage controlsmessage--cursor" onClick={() => handlepublish(register)}>Publish</span><span onClick={() => handlearchive(register)} className="controlsmessage controlsmessage--cursor">Archive</span></div> : otherStatusMessage(register)}</td>
                                </TrMainTable>
                            </>
                        })}
                    </TableObj>
                }
            </ContentTable>
            <PaginationTable>
                <div onClick={backPaginationData}>Prev</div>
                {
                    data.slice(0,lengthdate).map(element => {
                        i++
                        return <>
                            <div valuepagination={i} onClick={(event) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{i}</div>
                        </>
                    })
                }
                <div onClick={nextPaginationData}>Next</div>
            </PaginationTable>
        </>
    }else if(locationname === '/users'){
        return <>
            <ContentTable>
                {
                    <TableObj>
                        <TrMainTable>
                            {
                                columns.map(column => {
                                    return <>
                                        <th className="headercolumn">{column}{column === 'Name' ? <span style={rotate} onClick={handleOrderByNameEmployee} className="filtercolumn"></span> : <></>}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                            datastate.slice(actualdate,nextdate).map((employee) => {
                            return <>
                                    <RowTable data={employee} />
                            </>
                            })
                        }
                    </TableObj>
                }
            </ContentTable>
            <PaginationTable>
                <div onClick={backPaginationData}>Prev</div>
                {
                    data.slice(0,lengthdate).map(element => {
                        i++
                        return <>
                            <div valuepagination={i} onClick={(event) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{i}</div>
                        </>
                    })
                }
                <div onClick={nextPaginationData}>Next</div>
            </PaginationTable>
        </>
    }
} 