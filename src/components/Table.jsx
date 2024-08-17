import { TableObj, TrMainTable, ContentTable, PaginationTable } from "../styles/table/table"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Modal } from "@mui/material";
import { ModalNewNotes } from "../styles/table/ModalNotes";
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import ViewBooking from "./ViewBooking";
import { useDispatch } from "react-redux";

export default function Table({columns,data}){
    const [nextdate,setNextdate] = useState(10);
    const [actualdate,setActualdate] = useState(0);
    const [lengthdate,setLengthdate] = useState(Math.trunc(data.length / 10));
    const locationname = useLocation().pathname;
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState('');
    const [bookingvisible, setBookingvisible] = useState(false);
    const [databooking, setDatabooking] = useState({});
    const [desc,setDesc] = useState(false);
    const [descletter,setDescletter] = useState(false);
    const [rotate,setRotate] = useState({});
    const [datastate,setDatastate] = useState(data.map((info) => {
        return info
    }))
    const [edit,setEdit] = useState(false)
    const [showbtngroup2,setShowbtngroup2] = useState({
        display: 'none'
    })
    const [showbtngroup3,setShowbtngroup3] = useState({
        display: 'none'
    })
    const [hideedit,setHideedit] = useState({
        display: 'inline-block'
    })
    const [roomtype,setRoomtype] = useState()

    useEffect(() => {
        setDatastate(data.map((info) => {
            return info
        }))
    },[data])

    const dispatch = useDispatch()

    const handleOpen = (note) => {
        setNote(note)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
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

    const otherState = (state) => {
        if(state === 'In Progress'){
            return <div className="status statusinprogress">In Progress</div>
        }else if(state === 'Check Out'){
            return <div className="status statusbooked">Check Out</div>
        }
    }
    const othercolumns = (column) => {
        if(column === 'Room Type'){
            return <span style={rotate} onClick={handleOrderByLetter} className="filtercolumn"></span>
        }
    }
    const otherStatusMessage = (status) => {
        if(status === 'published'){
            return <span className="controlsmessage">Published</span>
        }else if(status === 'archived'){
            return <span className="controlsmessage" style={{color:'#E23428'}}>Archived</span>
        }
    }

    const viewbooking = (booking) => {
        setBookingvisible(true);
        setDatabooking(booking)
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

    const handleClickFunctionEdit = () => {
        if(edit === false){
            setEdit(true)
            setShowbtngroup2({
                display: 'inline-block'
            })
            setHideedit({
                display: 'none'
            })
        }else{
            setEdit(false)
            setShowbtngroup2({
                display: 'none'
            })
            setHideedit({
                display: 'inline-block'
            })
        }
        
    }
    const handleClickFunctionDelete = () => {
            setShowbtngroup3({
                display: 'inline-block'
            })
            setHideedit({
                display: 'none'
            })
    }
    const handleClickFunctionCancelDelete = () => {
        console.log('ee')
        setShowbtngroup3({
            display: 'none'
        })
        setHideedit({
            display: 'inline-block'
        })
    }
    const handleClickFunctionConfirmDelete = () => {
        alert('delete')
    }
    const handleClickFunctionSave = () => {
        alert('dave')
    }

    const handleSelectEdit = (value) => {
        setRoomtype(value)
    }


    
    if(locationname === '/bookings'){
        return <>
        <ContentTable>
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
                    
                    data.slice(actualdate,nextdate).map(register => {
                        return <>  
                            <TrMainTable>
                                <div>
                                    <td onClick={() => viewbooking(register)}>
                                        <img className="imgroomnameColum" width={150} height={77} src={''} alt="Image Room" />
                                        <div className="roomnameColumn">
                                            <span className="deluxenum numtit--black">{`${register.guest}`}</span>
                                            <span className="numtit">{`${'Double Room'}-${'12341'}`}</span>
                                        </div>
                                    </td>
                                </div>
                                <td>{register.orderDate} {register.ordertime}</td>
                                <td>{register.checkin}<br/>{register.timein}</td>
                                <td>{register.checkout}<br/>{register.timeout}</td>
                                <td onClick={() => handleOpen(register.specialRequest)} notes='true'>View Notes</td>
                                <td>{register.roomType}</td>
                                <td>{register.status === 'Check In' ? <div className="status">Check In</div> : otherState(register.status)}</td>
                                <td><img width={6} src={more} alt="more actions" /></td>
                            </TrMainTable>
                        </>
                    })}
                </TableObj>
            }
        </ContentTable>

        <Modal
        open={bookingvisible}
        onClose={() => setBookingvisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{alignContent: 'center'}}
        >
            <ModalNewRoom>
                <ViewBooking booking={databooking}></ViewBooking>
            </ModalNewRoom>
        </Modal>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{alignContent: 'center'}}
        >
            <ModalNewNotes>
                <div className="contentRoomNewRoom">
                    <h2>{note}</h2>
                </div>
            </ModalNewNotes>
        </Modal>
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
                    datastate.slice(actualdate,nextdate).map(room => {
                        return (edit === true) ? <>
                            <TrMainTable>
                                <div>
                                    <td>
                                        <img className="imgroomnameColum" width={150} height={77} src={room.photo[0]} alt="Image Room" />
                                        <div className="roomnameColumn">
                                            <span className="numtit">{`#000${room.idRoom}`}</span>
                                            <span className="deluxenum">{`${roomtype}-`}<input type="text" placeholder={room.roomNumber}/></span>
                                        </div>
                                    </td>
                                </div>
                                <td>
                                    <span className="deluxenum">
                                        <select onChange={(e) => handleSelectEdit(e.target.value)} name="selectroomtype" id="contentRoomNewRoom__roomtype">
                                            <option value={'Single Bed'}>Single Bed</option>
                                            <option value={'Double Bed'}>Double Bed</option>
                                            <option value={'Double Superior'}>Double Superior</option>
                                            <option value={'Suite'}>Suite</option>
                                        </select>
                                    </span>
                                </td>
                                <td>{room.amenities}</td>
                                <td>{room.price}<span className="nightroom"> /night</span></td>
                                <td>{`$${(parseInt(room.price.slice(1))-((parseInt(room.price.slice(1))*room.discount)/100)).toFixed(2)}(${((parseInt(room.price.slice(1))*room.discount)/100)}%)`}</td>
                                <td>{room.status === 'Available' ? <div className="status">Available</div> : <div className="status statusbooked">Booked</div>}</td>
                                <td style={{position:'relative'}}>
                                    <div style={hideedit}>
                                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                                    </div>
                                    
                                    <div style={showbtngroup2}>
                                        <div className="status editdelete" onClick={handleClickFunctionSave}>Save</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                                    </div>
                                    <div style={showbtngroup3}>
                                        <div className="status editdelete" onClick={handleClickFunctionConfirmDelete}>Confirm</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                                    </div>
                                </td>
                            </TrMainTable>
                        </> :
                        <>
                            <TrMainTable>
                                <div>
                                    <td>
                                        <img className="imgroomnameColum" width={150} height={77} src={room.photo[0]} alt="Image Room" />
                                        <div className="roomnameColumn">
                                            <span className="numtit">{`#000${room.idRoom}`}</span>
                                            <span className="deluxenum">{`${room.typeRoom}-${room.roomNumber}`}</span>
                                        </div>
                                    </td>
                                </div>
                                <td>{room.typeRoom}</td>
                                <td>{room.amenities}</td>
                                <td>{room.price}<span className="nightroom"> /night</span></td>
                                <td>{`$${(parseInt(room.price.slice(1))-((parseInt(room.price.slice(1))*room.discount)/100)).toFixed(2)}(${((parseInt(room.price.slice(1))*room.discount)/100)}%)`}</td>
                                <td>{room.status === 'Available' ? <div className="status">Available</div> : <div className="status statusbooked">Booked</div>}</td>
                                <td style={{position:'relative'}}>
                                <div style={hideedit}>
                                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                                    </div>
                                    
                                    <div style={showbtngroup2}>
                                        <div className="status editdelete" onClick={handleClickFunctionSave}>Save</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                                    </div>
                                    <div style={showbtngroup3}>
                                        <div className="status editdelete" onClick={handleClickFunctionConfirmDelete}>Confirm</div>
                                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                                    </div>
                                </td>
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
                        
                        data.slice(actualdate,nextdate).map(register => {
                            return <>  
                                <TrMainTable>
                                    <div>
                                        <td>#{register.idmessage}</td>
                                    </div>
                                    <td>{register.date}</td>
                                    <td>{register.customer}</td>
                                    <td>{register.comment}</td>
                                    <td>{register.status === 'none' ? <div><span className="controlsmessage">Publish</span><span className="controlsmessage">Archive</span></div> : otherStatusMessage(register.status)}</td>
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
                                        <th className="headercolumn">{column}</th>
                                    </>
                                })
                            }
                        </TrMainTable>
                        
                        {
                        data.slice(actualdate,nextdate).map(employee => {
                            return <>  
                                <TrMainTable>
                                    <div>
                                        <td>
                                            <img className="imgroomnameColum" width={150} height={77} src={employee.photo} alt="Image Employee" />
                                            <div className="roomnameColumn">
                                                <span className="numtit">{employee.name}</span>
                                                <span className="deluxenum">#{employee.idemployee}<br/>Joined on {employee.startdate}</span>
                                            </div>
                                        </td>
                                    </div>
                                    <td>{employee.description}</td>
                                    <td><span>{employee.phone}</span><br /><span>{employee.email}</span></td>
                                    <td>{employee.status}</td>
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
    }
} 