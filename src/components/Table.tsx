import { TableObj, TrMainTable, ContentTable, PaginationTable } from "../styles/table/table"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


import { useLocation } from "react-router-dom";
import RowTable from "./RowTable";
import CRoom from "../class/CRoom";
import CBooking from "../class/CBooking";
import CMessage from "../class/CMessage";
import CEmployee from "../class/CEmployee";
import BtnFilterTableTop from "./BtnFilterTableTop";

{/* props:InterfacePropsTable */}
export default function Table(props:any){
    const {columns,data} = props
    const [nextdate,setNextdate] = useState<number>(10);
    const [actualdate,setActualdate] = useState<number>(0);
    const locationname = useLocation().pathname;
    const [desc,setDesc] = useState<boolean>(false);
    const [descletter,setDescletter] = useState<boolean>(false);
    
    const [datastate,setDatastate] = useState<CBooking[]|CEmployee[]|CMessage[]|CRoom[]>(data.map((info:any) => {
        return info
    }))
    const [lengthdate,setLengthdate] = useState<number>(datastate.length / 10);
    const [looppag,setLooppag] = useState<number[]>([])
    
    useEffect(() => {
        if(lengthdate % 1 !== 0){
            setLengthdate(Math.ceil(lengthdate))
        }
        for(let i = 0; i < lengthdate; i++){
            looppag.push(i + 1)
        }
    },[])
    useEffect(() => {
        setDatastate(data.map((info:any) => {
            return info
        }))
    },[data])

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
    const numPickedPaginationData = (num:number) => {
        setActualdate((num * 10) - 10);
        setNextdate(num * 10);
    };

    const othercolumns = (column:string) => {
        if(column === 'Room Type'){
            return <BtnFilterTableTop click={handleOrderByLetter} />
        }
    }
    const othercolumnsBooking = (column:string) => {
        if(column === 'Check in'){
            return <span onClick={() => handleOrderByDate('checkin')} className="filtercolumn"></span>
        }else if(column === 'Check out'){
            return <span onClick={() => handleOrderByDate('checkout')} className="filtercolumn"></span>
        }else if(column === 'Order Date'){
            return <span onClick={() => handleOrderByDate('checkdate')} className="filtercolumn"></span>
        }
    }

    

    const handleOrderBy = () => {
        if(desc === false){
            setDesc(true)
            setDatastate(datastate.sort((a:any, b:any) => Number(a.price)  -  Number(b.price)));
        }else{
            setDesc(false)
            setDatastate(datastate.sort((a:any, b:any) => Number(b.price)  - Number(a.price)));
        }
    }
    const handleOrderByNameEmployee = () => {
        if(desc === false){
            setDesc(true)
            setDatastate(datastate.sort((a:any, b:any) => a.name.localeCompare(b.name))); 
        }else{
            setDesc(false)
            setDatastate(datastate.sort((a:any, b:any) => b.name.localeCompare(a.name))); 
        }
    }
    const handleOrderByLetter = () => {
        if(descletter === false){
            setDescletter(true)
            setDatastate(datastate.sort((a:any, b:any) => a.type_room.localeCompare(b.type_room))); 
        }else{
            setDescletter(false)
            setDatastate(datastate.sort((a:any, b:any) => b.type_room.localeCompare(a.type_room))); 
        }
    }
    const handleOrderByLetterBooking = () => {
        if(descletter === false){
            setDescletter(true)
            setDatastate(datastate.sort((a:any, b:any) => a.guest.localeCompare(b.guest))); 
        }else{
            setDescletter(false)
            setDatastate(datastate.sort((a:any, b:any) => b.guest.localeCompare(a.guest))); 
        }
    }
    const handleOrderByDate = (typedate:string) => {
        if(descletter === false){
            setDescletter(true)
            if(typedate === 'checkin'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.checkin).getTime()) - Number(new Date(b.checkin).getTime()))); 
            }else if(typedate === 'checkout'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.checkout).getTime()) - Number(new Date(b.checkout).getTime()))); 
            }else if(typedate === 'checkdate'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.orderDate).getTime()) - Number(new Date(b.orderDate).getTime()))); 
            }
        }else{
            setDescletter(false)
            if(typedate === 'checkin'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(b.checkin).getTime()) - Number(new Date(a.checkin).getTime()))); 
            }else if(typedate === 'checkout'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(b.checkout).getTime()) - Number(new Date(a.checkout).getTime()))); 
            }else if(typedate === 'checkdate'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(b.orderDate).getTime()) - Number(new Date(a.orderDate).getTime()))); 
            }
        }
    }
    //.slice(actualdate,nextdate)
    if(locationname === '/bookings'){
        return <>
        <ContentTable>
            {
                <TableObj>
                    <TrMainTable>
                        {
                            columns.map((column:any) => {
                                return <>
                                    <th className="headercolumn">{column}{column === 'Guest' ? <span onClick={handleOrderByLetterBooking} className="filtercolumn"></span> : othercolumnsBooking(column)}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((booking:any) => {
                            const objectBooking = new CBooking(
                                booking.id,
                                booking.guest,
                                booking.orderdate,
                                booking.checkin,
                                booking.checkout,
                                booking.specialrequest,
                                booking.status,
                                booking.room_id,
                            )
                        return <>
                                <RowTable data={objectBooking} />
                        </>
                        })
                    }
                </TableObj>
            }
        </ContentTable>

        <PaginationTable>
            <div onClick={backPaginationData}>Prev</div>
            {
                looppag.map((element,index) => {
                    return <>
                        {/*valuepagination={element}*/}
                        <div key={index} onClick={(event:any) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{element}</div>
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
                            columns.map((column:any) => {
                                return <>
                                    {column === 'Cancellation' || column === 'Description' ?
                                            <th className="headercolumn" style={{width:"500px"}}>
                                                {column}{column === 'Price' ? 
                                                <>
                                                    <BtnFilterTableTop click={handleOrderBy} />
                                                </> 
                                                :
                                                othercolumns(column)}
                                            </th>
                                        :
                                            <th className="headercolumn">{column}{column === 'Price' ? 
                                                    <BtnFilterTableTop click={handleOrderBy} />
                                                :
                                                othercolumns(column)}
                                            </th>
                                    }
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((room:any) => {
                            const objectRoom = new CRoom(
                                room.id,
                                room.room_number,
                                room.photos||[],
                                room.type_room,
                                room.description,
                                room.offer,
                                room.price,
                                room.discount,
                                room.cancellation,
                                room.status,
                                room.amenities,
                            )
                        return <>
                                <RowTable data={objectRoom} />
                        </>
                        })
                    }
                </TableObj>
            }
        </ContentTable>
        <PaginationTable>
            <div onClick={backPaginationData}>Prev</div>
            {
                looppag.map((val,index) => {
                    return <>
                    {/* valuepagination={val} */}
                        <div key={index} onClick={(event:any) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{val}</div>
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
                                columns.map((column:any) => {
                                    return <>
                                        <th className="headercolumn">{column}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                            datastate.slice(actualdate,nextdate).map((register:any) => {
                                const objectMessage = new CMessage(
                                    register.id,
                                    register.date,
                                    register.customer,
                                    register.email,
                                    register.phone,
                                    register.reason,
                                    register.comment,
                                    register.status,
                                )
                                return <>  
                                    <RowTable data={objectMessage} />
                                </>
                            })
                        }
                    </TableObj>
                }
            </ContentTable>
            <PaginationTable>
                <div onClick={backPaginationData}>Prev</div>
                {
                    looppag.map((element,index) => {
                        return <>
                        {/* valuepagination={element} */}
                            <div key={index}  onClick={(event:any) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{element}</div>
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
                                columns.map((column:any) => {
                                    return <>
                                        <th className="headercolumn">{column}{column === 'Name' ? <span onClick={handleOrderByNameEmployee} className="filtercolumn"></span> : <></>}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                            datastate.slice(actualdate,nextdate).map((employee:any) => {
                                const objectEmployee = new CEmployee(
                                    employee.id,
                                    employee.photo,
                                    employee.name,
                                    employee.email,
                                    employee.startdate,
                                    employee.description,
                                    employee.phone,
                                    employee.status,
                                )
                                return <>
                                        <RowTable data={objectEmployee} />
                                </>
                            })
                        }
                    </TableObj>
                }
            </ContentTable>
            <PaginationTable>
                <div onClick={backPaginationData}>Prev</div>
                {
                    looppag.map((element,index) => {
                        return <>
                            {/* valuepagination={element} */}
                            <div key={index} onClick={(event:any) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{element}</div>
                        </>
                    })
                }
                <div onClick={nextPaginationData}>Next</div>
            </PaginationTable>
        </>
    }
} 