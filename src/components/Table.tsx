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
import { InterfacePropsTable } from "../interfaces/InterfacePropsTable";


export default function Table(props:InterfacePropsTable){
    const {columns,data} = props

    const [nextdate,setNextdate] = useState<number>(10);
    const [actualdate,setActualdate] = useState<number>(0);
    const locationname = useLocation().pathname;
    const [desc,setDesc] = useState<boolean>(false);
    const [descletter,setDescletter] = useState<boolean>(false);
    const [rotate,setRotate] = useState<object>({});
    const [datastate,setDatastate] = useState<CBooking[]|CEmployee[]|CMessage[]|CRoom[]>(data.map((info) => {
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
        setDatastate(data.map((info) => {
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
    }

    const othercolumns = (column:string) => {
        if(column === 'Room Type'){
            return <span style={rotate} onClick={handleOrderByLetter} className="filtercolumn"></span>
        }
    }
    const othercolumnsBooking = (column:string) => {
        if(column === 'Check in'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkin')} className="filtercolumn"></span>
        }else if(column === 'Check out'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkout')} className="filtercolumn"></span>
        }else if(column === 'Order Date'){
            return <span style={rotate} onClick={() => handleOrderByDate('checkdate')} className="filtercolumn"></span>
        }
    }

    const rotateiconOrderBy = (order:boolean) =>{
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
            setDatastate(datastate.sort((a:any, b:any) => Number(a.price.split("$")[1])  -  Number(b.price.split("$")[1])));
        }else{
            setDesc(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a:any, b:any) => Number(b.price.split("$")[1])  - Number(a.price.split("$")[1])));
        }
    }
    const handleOrderByNameEmployee = () => {
        if(desc === false){
            setDesc(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a:any, b:any) => a.name.localeCompare(b.name))); 
        }else{
            setDesc(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a:any, b:any) => b.name.localeCompare(a.name))); 
        }
    }
    const handleOrderByLetter = () => {
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a:any, b:any) => a.typeRoom.localeCompare(b.typeRoom))); 
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a:any, b:any) => b.typeRoom.localeCompare(a.typeRoom))); 
        }
    }
    const handleOrderByLetterBooking = () => {
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            setDatastate(datastate.sort((a:any, b:any) => a.guest.localeCompare(b.guest))); 
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
            setDatastate(datastate.sort((a:any, b:any) => b.guest.localeCompare(a.guest))); 
        }
    }
    const handleOrderByDate = (typedate:string) => {
        if(descletter === false){
            setDescletter(true)
            rotateiconOrderBy(false)
            if(typedate === 'checkin'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.checkin).getTime()) - Number(new Date(b.checkin).getTime()))); 
            }else if(typedate === 'checkout'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.checkout).getTime()) - Number(new Date(b.checkout).getTime()))); 
            }else if(typedate === 'checkdate'){
                setDatastate(datastate.sort((a:any, b:any) => Number(new Date(a.orderDate).getTime()) - Number(new Date(b.orderDate).getTime()))); 
            }
        }else{
            setDescletter(false)
            rotateiconOrderBy(true)
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
                            columns.map(column => {
                                return <>
                                    <th className="headercolumn">{column}{column === 'Guest' ? <span style={rotate} onClick={handleOrderByLetterBooking} className="filtercolumn"></span> : othercolumnsBooking(column)}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((booking:any) => {
                            const objectBooking = new CBooking(
                                booking._id,
                                booking.guest,
                                booking.orderDate,
                                booking.checkin,
                                booking.timein,
                                booking.checkout,
                                booking.timeout,
                                booking.ordertime,
                                booking.specialRequest,
                                booking.roomType,
                                booking.status,
                                booking.idRoom,
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
                            columns.map(column => {
                                return <>
                                    <th className="headercolumn">{column}{column === 'Price' ? <span style={rotate} onClick={handleOrderBy} className="filtercolumn"></span> : othercolumns(column)}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {
                        datastate.slice(actualdate,nextdate).map((room:any) => {
                            const objectRoom = new CRoom(
                                room._id,
                                room.roomNumber,
                                room.photo,
                                room.typeRoom,
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
                                columns.map(column => {
                                    return <>
                                        <th className="headercolumn">{column}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                            datastate.slice(actualdate,nextdate).map((register:any) => {
                                const objectMessage = new CMessage(
                                    register._id,
                                    register.date,
                                    register.idmessage,
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
                                columns.map(column => {
                                    return <>
                                        <th className="headercolumn">{column}{column === 'Name' ? <span style={rotate} onClick={handleOrderByNameEmployee} className="filtercolumn"></span> : <></>}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                            datastate.slice(actualdate,nextdate).map((employee:any) => {
                                const objectEmployee = new CEmployee(
                                    employee._id,
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