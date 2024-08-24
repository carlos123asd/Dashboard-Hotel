import { useEffect, useState } from "react";
import { TrMainTable } from "../styles/table/table";
import handleValidateFormEditRoom from "../features/forms/validationformEditRoom";
import deleteRoom from "../features/db/fecths/deleteRoom";
import { useLocation } from "react-router-dom";
import ViewBooking from "./ViewBooking";
import deleteBooking from "../features/db/fecths/deleteBooking";
import { Modal } from "@mui/material";
import { ModalNewNotes } from "../styles/table/ModalNotes";
import phonecontact from '../assets/imgs/phone.svg'
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import { useSelector } from "react-redux";

export default function RowTable({data=data.data}){
    const [locationname,setlocationname] = useState(useLocation().pathname);
    const [typeroomedit,setTyperoomedit] = useState("")
    const [numroomedit,setNumroomedit] = useState("")
    const [facilitiesedit,setFacilitiesedit] = useState("")
    const [cancelationedit,setCancelationedit] = useState("")
    const [descriptionedit,setDescriptionedit] = useState("")
    const [priceedit,setPriceedit] = useState("")
    const [discountedit,setDiscountedit] = useState("")
    const [statusedit,setStatusedit] = useState("")
    const [edit,setEdit] = useState(false) //evaluar de bool a id
    const [showbtngroup2,setShowbtngroup2] = useState({
        display: 'none'
    })
    const [showbtngroup3,setShowbtngroup3] = useState({
        display: 'none'
    })
    const [hideedit,setHideedit] = useState({
        display: 'inline-block'
    })
    const [open, setOpen] = useState(false); 
    const [bookingvisible, setBookingvisible] = useState(false);
    const dbRoom = useSelector(state => state.db.data.rooms)
    const [roomselectbooking,setRoomselectbooking] = useState([])

    console.log(data.idRoom)
    if(locationname.slice(1) === 'bookings'){
        console.log('w')
        const a = data.filter((booking) => {
            console.log(booking)
            return (booking.idRoom).toString() 
        })
        console.log(a)
        const rooms = dbRoom.filter((room) => {
            return room.id === a
        })
        
        console.log(rooms)
    }

    console.log(roomselectbooking)


    const handlechangeTypeRoom = (typeroom) => {
        setTyperoomedit(typeroom)
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
        setShowbtngroup3({
            display: 'none'
        })
        setHideedit({
            display: 'inline-block'
        })
    }

    const handleClickSave = (room) => {
        console.log(typeroomedit)
        if(parseInt(discountedit) > 0){
            handleValidateFormEditRoom(room,{
                typeRoom: typeroomedit,
                roomNumber: numroomedit,
                amenities: facilitiesedit,
                price: `$${priceedit}`,
                offer: true,
                discount: discountedit,
                status: statusedit,
                description: descriptionedit,
                cancellation: cancelationedit
            })
        }else{
            handleValidateFormEditRoom(room,{
                typeRoom: typeroomedit,
                roomNumber: numroomedit,
                amenities: facilitiesedit,
                price: `$${priceedit}`,
                offer: false,
                discount: discountedit,
                status: statusedit,
                description: descriptionedit,
                cancellation: cancelationedit
            })
        }
        handleClickFunctionEdit()
    }

    const handledeleteRoom = (id) => {
        deleteRoom(id)
        handleClickFunctionCancelDelete()
    }

    const otherState = (state) => {
        if(state === 'In Progress'){
            return <div className="status statusinprogress">In Progress</div>
        }else if(state === 'Check Out'){
            return <div className="status statusbooked">Check Out</div>
        }
    }
    const handleOpen = () => {
        setOpen(true)
    };
    const handledeleteBooking = (id) => {
        console.log(id)
        deleteBooking(id.toString())
        handleClickFunctionCancelDelete()
    }

    const handleOpenViewBooking = () => setBookingvisible(true)

    if(locationname === '/room'){
        return (edit === true) ? <>
                <TrMainTable>
                    <div>
                        <td>
                            <img className="imgroomnameColum" width={150} height={77} src={data.photo[0]} alt="Image Room" />
                            <div className="roomnameColumn">
                                <span className="numtit">{`#000${data.id}`}</span>
                                <span className="deluxenum">{`${data.typeRoom}-`}<input onChange={(e) => setNumroomedit(e.target.value)} name="roomNumberEditable" className="inputText" type="text" placeholder={data.roomNumber}/></span>
                            </div>
                        </td>
                    </div>
                    <td>
                        <span className="deluxenum">
                            <select name="typeroomEditable" value={data.typeRoom} className="inputSelect" onChange={(e) => handlechangeTypeRoom(e.target.value)} id="contentRoomNewRoom__roomtype">
                                <option value='Single Bed'>Pick a Type Room</option>
                                <option value='Single Bed'>Single Bed</option>
                                <option value='Double Bed'>Double Bed</option>
                                <option value='Double Superior'>Double Superior</option>
                                <option value='Suite'>Suite</option>
                            </select>
                        </span>
                    </td>
                    <td><textarea onChange={(e) => setFacilitiesedit(e.target.value)} name="amenitiesEditable" className="textareainputroomeditable" placeholder={data.amenities}></textarea></td>
                    <td><input onChange={(e) => setPriceedit(e.target.value)} name="priceEditable" className="inputText inputText--size" type="text" placeholder={data.price}/><span className="nightroom"> /night</span></td>
                    <td>{`$${(parseInt(data.price.slice(1))-((parseInt(data.price.slice(1))*data.discount)/100)).toFixed(2)}`}<input onChange={(e) => setDiscountedit(e.target.value)} name="discountEditable" className="inputText" placeholder={`${data.discount}%`}></input></td>
                    <td><textarea onChange={(e) => setCancelationedit(e.target.value)} name="cancelationedit" className="textareainputroomeditable" placeholder={data.cancellation}></textarea></td>
                    <td><textarea onChange={(e) => setDescriptionedit(e.target.value)} name="descriptionedit" className="textareainputroomeditable" placeholder={data.description}></textarea></td>
                    <td>{data.status === 'Available' ? <div className="status"><select onSelect={(e) => setStatusedit(e.target.value)} name="statusEditable" value={data.status} className="inputSelect inputSelect--statusAvaible"><option value="Available">Available</option><option value="Booked">Booked</option></select></div> : <div className="status statusbooked"><select onChange={(e) => setStatusedit(e.target.value)} name="statusEditable" className="inputSelect inputSelect--statusBooked"><option value="Available">Available</option><option value="Booked">Booked</option></select></div>}</td>
                    <td style={{position:'relative'}}>
                        <div style={hideedit}>
                            <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                        </div>
                        <div style={showbtngroup2}>
                            <div className="status editdelete" onClick={() => handleClickSave(data)}>Save</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                        </div>
                        <div style={showbtngroup3}>
                            <div className="status editdelete" onClick={() => handledeleteRoom(data.id)}>Confirm</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                        </div>
                    </td>
                </TrMainTable>
            </> :
            <>
                <TrMainTable>
                    <div>
                        <td>
                            <img className="imgroomnameColum" width={150} height={77} src={data.photo[0]} alt="Image Room" />
                            <div className="roomnameColumn">
                                <span className="numtit">{`#000${data.id}`}</span>
                                <span className="deluxenum mediumletter">{`${data.typeRoom}-${data.roomNumber}`}</span>
                            </div>
                        </td>
                    </div>
                    <td className="mediumletter">{data.typeRoom}</td>
                    <td className="mediumletter">{data.amenities}</td>
                    <td><span className="priceRoom">{data.price}</span><span className="nightroom"> /night</span></td>
                    <td>{`$${(parseInt(data.price.slice(1))-((parseInt(data.price.slice(1))*data.discount)/100)).toFixed(2)}(${data.discount}%)`}</td>
                    <td className="mediumletter">{data.cancellation}</td>
                    <td className="mediumletter">{data.description}</td>
                    <td>{data.status === 'Available' ? <div className="status">Available</div> : <div className="status statusbooked">Booked</div>}</td>
                    <td style={{position:'relative'}}>
                        <div style={hideedit}>
                            <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                        </div>
                        <div style={showbtngroup2}>
                            <div className="status editdelete" >Save</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                        </div>
                        <div style={showbtngroup3}>
                        <div className="status editdelete" onClick={() => handledeleteRoom(data.id)}>Confirm</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                        </div>
                    </td>
                </TrMainTable>
            </>
    }else if(locationname === '/bookings'){
        return (edit === true) ? <>
                <TrMainTable>
                    <div>
                        <td onClick={() => handleOpenViewBooking(data)}>
                            <img className="imgroomnameColum" width={150} height={77} src={''} alt="Image Room" />
                            <div className="roomnameColumn">
                                <span className="deluxenum numtit--black"><input type="text" placeholder={data.guest} /></span>
                                <span className="numtit">{`${roomselectbooking[0].typeRoom}-${roomselectbooking[0].roomNumber}`}</span>
                            </div>
                        </td>
                    </div>
                    <td>{data.orderDate} {data.ordertime}</td>
                    <td>{data.checkin}<br/>{data.timein}</td>
                    <td>{data.checkout}<br/>{data.timeout}</td>
                    <td notes='true'>View Notes</td>
                    <td>{data.roomType}</td>
                    <td>{data.status === 'Check In' ? <div className="status">Check In</div> : otherState(data.status)}</td>
                        <div style={hideedit}>
                            <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                        </div>
                        <div style={showbtngroup2}>
                            <div className="status editdelete">Save</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                        </div>
                        <div style={showbtngroup3}>
                            <div className="status editdelete">Confirm</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                        </div>
                </TrMainTable>
        </> :
        <>
               <Modal
                open={bookingvisible}
                onClose={() => setBookingvisible(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{alignContent: 'center'}}
                >
                    <ModalNewRoom>
                        <ViewBooking booking={data}></ViewBooking>
                    </ModalNewRoom>
                </Modal>

                <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{alignContent: 'center'}}
                >
                    <ModalNewNotes>
                        <div className="contentRoomNewRoom">
                            <h2>{data.specialRequest}</h2>
                        </div>
                    </ModalNewNotes>
                </Modal>
                <TrMainTable>
                    <div>
                        <td onClick={() => setBookingvisible(true)}>
                            <img className="imgroomnameColum" width={150} height={77} src={''} alt="Image Room" />
                            <div className="roomnameColumn">
                                <span className="deluxenum numtit--black namebooking">{`${data.guest}`}</span>
                                <span className="numtit">{`${roomselectbooking[0].typeRoom}-${roomselectbooking[0].roomNumber}`}</span>
                            </div>
                        </td>
                    </div>
                    <td>{data.orderDate} {data.ordertime}</td>
                    <td><span className="namebooking">{data.checkin}</span><br/><span className="timeinbooking">{data.timein}</span></td>
                    <td><span className="namebooking">{data.checkout}</span><br/><span className="timeinbooking">{data.timeout}</span></td>
                    <td onClick={handleOpen} notes='true'>View Notes</td>
                    <td className="namebooking">{data.roomType}</td>
                    <td>{data.status === 'Check In' ? <div className="status">Check In</div> : otherState(data.status)}</td>
                        <div style={hideedit}>
                            <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                        </div>
                        <div style={showbtngroup2}>
                            <div className="status editdelete">Save</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                        </div>
                        <div style={showbtngroup3}>
                            <div className="status editdelete" onClick={() => handledeleteBooking(data.id)}>Confirm</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                        </div>
                </TrMainTable>
        </>
    }else if(locationname === '/users'){
        return (edit === true) ? <>
            <TrMainTable>
                <div>
                    <td>
                        <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Employee" />
                        <div className="roomnameColumn">
                            <span className="nameemployee">{data.name}</span>
                            <span className="deluxenum">#{data.id}<br/>Joined on {data.startdate}</span>
                        </div>
                    </td>
                </div>
                <td className="descriptionemployee">{data.description}</td>
                <td className="contactemployee"><span><img src={phonecontact} alt="Contact Employee" />{data.phone}</span><br /><span>{data.email}</span></td>
                {data.status === 'active' ? <td className="statusemployee statusemployee--active">{data.status}</td> : <td className="statusemployee statusemployee--inactive">{data.status}</td>}
                    <div style={hideedit}>
                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                    </div>
                    <div style={showbtngroup2}>
                        <div className="status editdelete">Save</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                    </div>
                    <div style={showbtngroup3}>
                        <div className="status editdelete" onClick={() => handledeleteBooking(data.id)}>Confirm</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                    </div>
            </TrMainTable>
        </>
        :
        <>
            <TrMainTable>
                <div>
                    <td>
                        <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Employee" />
                        <div className="roomnameColumn">
                            <span className="nameemployee">{data.name}</span>
                            <span className="deluxenum">#{data.id}<br/>Joined on {data.startdate}</span>
                        </div>
                    </td>
                </div>
                <td className="descriptionemployee">{data.description}</td>
                <td className="contactemployee"><span><img src={phonecontact} alt="Contact Employee" />{data.phone}</span><br /><span>{data.email}</span></td>
                {data.status === 'active' ? <td className="statusemployee statusemployee--active">{data.status}</td> : <td className="statusemployee statusemployee--inactive">{data.status}</td>}
                    <div style={hideedit}>
                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                    </div>
                    <div style={showbtngroup2}>
                        <div className="status editdelete">Save</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                    </div>
                    <div style={showbtngroup3}>
                        <div className="status editdelete" onClick={() => handledeleteBooking(data.id)}>Confirm</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                    </div>
            </TrMainTable>
        </>
    }
}
