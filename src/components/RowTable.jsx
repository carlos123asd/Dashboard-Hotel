import { useEffect, useState } from "react";
import { TrMainTable } from "../styles/table/table";
import handleValidateFormEditRoom from "../features/forms/validationformEditRoom";
import handleValidateFormEditBooking from "../features/forms/validationformEditBooking"
import deleteRoom from "../features/db/fecths/deleteRoom";
import { useLocation } from "react-router-dom";
import ViewBooking from "./ViewBooking";
import deleteBooking from "../features/db/fecths/deleteBooking";
import { Modal } from "@mui/material";
import { ModalNewNotes } from "../styles/table/ModalNotes";
import phonecontact from '../assets/imgs/phone.svg'
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import { useSelector } from "react-redux";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import editRoomBooking from '../assets/imgs/edit.svg'
import editBooking from '../features/db/fecths/editBooking'
import MuiPhoneNumber from "mui-phone-number";
import editUser from "../features/db/fecths/editUser";
import deleteUser from "../features/db/fecths/deleteUser";
import restart from '../assets/imgs/restart.svg'
import updateStatusfetchMessage from "../features/db/fecths/updateStatusfetchMessage";
import handleValidateFormEditUser from "../features/forms/validationformEditUser";


export default function RowTable({data=data.data}){
    const [locationname,setLocationname] = useState(useLocation().pathname);
    
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
    const [openeditroombooking,setOpeneditroombooking] = useState(false)
    const [typeroombooking,setTyperoombooking] = useState("")

    const [roomselectedit,setRoomselectedit] = useState("")
    const [namebookingedit,setNamebookingedit] = useState("")
    const [orderdatebookingedit,setOrderdatebookingedit] = useState("")
    const [checkinbookingedit,setCheckinbookingedit] = useState("")
    const [checkoutbookingedit,setCheckoutbookingedit] = useState("")
    const [specialrequestedit,setSpecialrequestedit] = useState("")
    const [statusbookingedit,setStatusbookingedit] = useState("")
    
    const [numberphonestate,setNumberphonestate] = useState("")
    const [nameedituser,setNameedituser] = useState("")
    const [emailedituser,setEmailedituser] = useState("")
    const [descriptionedituser,setDescriptionedituser] = useState("")
    const [statusedituser,setStatusedituser] = useState("")
    

/*
    useEffect(()=>{
        if(locationname === 'bookings'){
            const roomselectBooking = dbRoom.filter((booking) => {
                return booking.id === (data.idRoom).toString()
            })//roomselectBooking.photo[0] da error porque no hay relacion en mokeado (no hay un foreign key)
        }
    },[locationname])*/

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

    const handleClickSave = () => {
        let objetDataSaveRoom = {
            typeRoom: (typeroomedit !== '') ? typeroomedit : data.typeRoom,
            roomNumber: (numroomedit !== '') ? numroomedit : data.roomNumber,
            amenities: (facilitiesedit !== '') ? facilitiesedit : data.amenities,
            price: (priceedit !== '') ? `$${priceedit}` : data.price,
            discount: (discountedit !== '') ? discountedit : data.discount,
            status: (statusedit !== '') ? statusedit : data.status,
            description: (descriptionedit !== '') ? descriptionedit : data.description,
            cancellation: (cancelationedit !== '') ? cancelationedit : data.cancellation,
        }

        if(discountedit === ''){
            objetDataSaveRoom = {
                ...objetDataSaveRoom,
                offer: data.offer
            }
        }else{
            if(parseInt(discountedit) > 0){
                objetDataSaveRoom = {
                    ...objetDataSaveRoom,
                    offer:true
                }
            }else{
                objetDataSaveRoom = {
                    ...objetDataSaveRoom,
                    offer:false
                }
            }
        }
        const response = handleValidateFormEditRoom(data,objetDataSaveRoom)
        response === true ? handleClickFunctionEdit() : <></>
    }

    const handledeleteRoom = () => {
        deleteRoom(data.id)
        handleClickFunctionCancelDelete()
    }

    const otherState = (state) => {
        if(state === 'In Progress'){
            return <div className="status statusinprogress">In Progress</div>
        }else if(state === 'Check Out'){
            return <div className="status statusbooked">Check Out</div>
        }
    }
    const otherStateEdit = (state) => {
        if(state === 'In Progress'){
            return <select className="status statusinprogress"><option value="Check In">Check In</option><option value="Check Out">Check Out</option><option value="In Progress">In Progress</option></select>
        }else if(state === 'Check Out'){
            return <select className="status statusbooked"><option value="Check In">Check In</option><option value="Check Out">Check Out</option><option value="In Progress">In Progress</option></select>
        }
    }
    const handleOpen = () => {
        setOpen(true)
    };
    const handledeleteBooking = () => {
        deleteBooking(String(data.id))
        handleClickFunctionCancelDelete()
    }

    const handleOpenViewBooking = () => setBookingvisible(true)

    const handleSaveBooking = () => {
        const dataBookingEdit = {
            guest: (namebookingedit !== '') ? namebookingedit : data.guest,
            roomType: (roomselectedit !== '') ? roomselectedit.split('-')[0] : data.roomType,
            orderDate: (orderdatebookingedit !== '') ? orderdatebookingedit : data.orderDate,
            checkin: (checkinbookingedit !== '') ? checkinbookingedit : data.checkin,
            checkout: (checkoutbookingedit !== '') ? checkoutbookingedit : data.checkout,
            specialRequest: (specialrequestedit !== '') ? specialrequestedit : data.specialRequest,
            status: (statusbookingedit !== '') ? statusbookingedit : data.status,
            idRoom: (roomselectedit !== '') ? roomselectedit.split('-')[1] : data.idRoom,
        }
        const response = handleValidateFormEditBooking(data,dataBookingEdit)
        response === true ? handleClickFunctionEdit() : <></>
    }
    const handleSaveEditUser = () => {
        const dataUserEdit = {
            photo: [
                "https://static.vecteezy.com/system/resources/previews/011/186/876/original/male-profile-picture-symbol-vector.jpg"
            ],
            name: (nameedituser !== '') ? nameedituser : data.name,
            email: (emailedituser !== '') ? emailedituser : data.email,
            description: (descriptionedituser !== '') ? descriptionedituser : data.description,
            phone: (numberphonestate !== '') ? numberphonestate : data.phone,
            status: (statusedituser !== '') ? statusedituser : data.status,
        }
        const response = handleValidateFormEditUser(data,dataUserEdit)
        response === true ? handleClickFunctionEdit() : <></>
    }

    const handleDeleteUser = () => {
        deleteUser(data.id)
        handleClickFunctionCancelDelete()
    }

    //Message
    const otherStatusMessage = () => {
        console.log(data.status)
        if(data.status === 'published'){
            return <>
                <span className="controlsmessage controlsmessage--bordernone">Published</span>
                <img onClick={() => handlerestart()} src={restart} alt="Unpublish" />
            </>
        }else if(data.status === 'archived'){
            return <>
                <span className="controlsmessage controlsmessage--bordernone" style={{color:'#E23428'}}>Archived</span>
                <img onClick={() => handlerestart()} src={restart} alt="Unarchive" />
            </> 
        }
    }
    const handlepublish = () => {
        updateStatusfetchMessage(data,'published','Message Published')
        data.setStatus('published')
    }
    const handlearchive = () => {
        updateStatusfetchMessage(data,'archived','Message Archived')
        data.setStatus('archived')
    }
    const handlerestart = () => {
        updateStatusfetchMessage(data,'none','Message Restored')
        data.setStatus('none')
    }
    
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
                            <select name="typeroomEditable" className="inputSelect" onChange={(e) => handlechangeTypeRoom(e.target.value)} id="contentRoomNewRoom__roomtype">
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
                            <div className="status editdelete" onClick={() => handleClickSave()}>Save</div>
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
                        <div className="status editdelete" onClick={() => handledeleteRoom()}>Confirm</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                        </div>
                    </td>
                </TrMainTable>
            </>
    }else if(locationname === '/bookings'){
        return (edit === true) ? <>
                <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{alignContent: 'center'}}
                >
                    <ModalNewNotes>
                        <div className="contentRoomNewRoom">
                            <textarea onChange={(e) => setSpecialrequestedit(e.target.value)} name="cancelationedit" className="textareainputbookingeditable" placeholder={data.specialRequest}></textarea>
                        </div>
                    </ModalNewNotes>
                </Modal>

                <Modal
                open={openeditroombooking}
                onClose={() => setOpeneditroombooking(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{alignContent: 'center'}}
                >
                    <ModalNewRoom style={{width:'50%'}}>
                        <div className="contentRoomNewRoom contentRoomNewRoom--editRoomBooking">
                            <div>
                                <h2>Rooms Available</h2>
                                <div className="contentRoomNewRoom__firstblock sectionformbooking">
                                        <label htmlFor="roomtype">Room Type</label>
                                        <select name="selectroomtype" value={data.roomType} onChange={event => setTyperoombooking(event.target.value)} id="contentRoomNewRoom__roomtype">
                                            <option value={'Single Bed'}>Single Bed</option>
                                            <option value={'Double Bed'}>Double Bed</option>
                                            <option value={'Double Superior'}>Double Superior</option>
                                            <option value={'Suite'}>Suite</option>
                                        </select>
                                </div>
                                <h2>Reserve room</h2>
                                <span className="RoomEditBooking">{data.roomType} #{data.idRoom}</span>
                            </div>
                            
                            <div className="contentbookingedit">
                                <h2>List of available rooms</h2>
                                <ul>
                                    {
                                        dbRoom.map(room => {
                                            if(room.status === "Available" && room.typeRoom === typeroombooking){
                                                return <>
                                                    <li>
                                                        <input id="roomselected" name="roomselected" type="radio" onClick={() => setRoomselectedit(`${room.typeRoom}-${room.id}`)} value={`${room.typeRoom}-${room.id}`}/>
                                                        <span style={{marginLeft:'1em'}}>{room.typeRoom}-{room.roomNumber}</span>
                                                    </li>
                                                </>
                                            }
                                            
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </ModalNewRoom>
                </Modal>
                <TrMainTable>
                    <div>
                        <td onClick={() => handleOpenViewBooking(data)}>
                            <img className="imgroomnameColum" width={150} height={77} src={''} alt="Image Room" />
                            <div className="roomnameColumn">
                                <span className="deluxenum numtit--black"><input className="inputEditBookingGuest" onChange={(e) => setNamebookingedit(e.target.value)} type="text" placeholder={data.guest} /></span>
                                <span className="numtit">{`${data.roomType}-${'12341'}`}<img onClick={() => setOpeneditroombooking(true)} src={editRoomBooking} alt="Edit Reservation Room"></img></span>
                            </div>
                        </td>
                    </div>
                    <td>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                            label={'Day,Month,Year'}
                            views={['day','month','year']}
                            className="inputDataEditBooking"
                            onChange={(e) => setOrderdatebookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
                            />
                        </DemoContainer>
                        </LocalizationProvider>
                    </td>
                    <td>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                            label={'Day,Month,Year'}
                            views={['day','month','year']}
                            className="inputDataEditBooking"
                            onChange={(e) => setCheckinbookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
                            />
                        </DemoContainer>
                        </LocalizationProvider>
                    </td>
                    <td>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                            label={'Day,Month,Year'}
                            views={['day','month','year']}
                            className="inputDataEditBooking"
                            onChange={(e) => setCheckoutbookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
                            />
                        </DemoContainer>
                        </LocalizationProvider>
                    </td>
                    <td onClick={handleOpen} notes='true'>Edit View Notes</td>
                    <td>{data.roomType}</td>
                    <td>{data.status === 'Check In' ? <select onChange={(e) => setStatusbookingedit(e.target.value)} className="status"><option value="Check In">Check In</option><option value="Check Out">Check Out</option><option value="In Progress">In Progress</option></select> : otherStateEdit(data.status)}</td>
                        <div style={hideedit}>
                            <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                            <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                        </div>
                        <div style={showbtngroup2}>
                            <div className="status editdelete" onClick={() => handleSaveBooking()}>Save</div>
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
                                <span className="numtit">{`${data.roomType}-${'12341'}`}</span>
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
                            <div className="status editdelete" onClick={() => handledeleteBooking()}>Confirm</div>
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
                            <input onChange={(e) => setNameedituser(e.target.value)} className="inputEditBookingGuest" style={{height:'3em'}} type="text" name="nameuseredit" placeholder={data.name} />
                            <span className="deluxenum">#{data.id}<br/>Joined on {data.startdate}</span>
                        </div>
                    </td>
                </div>
                <td className="descriptionemployee textareainputbookingeditable"><textarea onChange={(e) => setDescriptionedituser(e.target.value)} className="textareainputroomeditable" placeholder={data.description} name="descriptionuseredit"></textarea></td>
                <td style={{alignContent: 'stretch'}} className="contactemployee">
                    <MuiPhoneNumber style={{display:'block'}} defaultCountry={'es'} onChange={(e) => setNumberphonestate(e)}/>
                    <br />
                    <input onChange={(e) => setEmailedituser(e.target.value)} className="inputEditBookingGuest" style={{height:'3em',width:'100%'}} type="text" placeholder={data.email} />
                </td>
                <td style={{alignContent: 'center'}} className="statusemployee statusemployee--inactive">
                    <select onChange={(e) => setStatusedituser(e.target.value)} style={{width:'20%'}} className="inputSelect inputSelect--statusemployee" name="statususeredit">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </td>
                <td style={{alignContent: 'center'}}>
                    <div style={hideedit}>
                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                    </div>
                    <div style={showbtngroup2}>
                        <div onClick={() => handleSaveEditUser()} className="status editdelete">Save</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                    </div>
                    <div style={showbtngroup3}>
                        <div className="status editdelete">Confirm</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                    </div>
                </td>
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
                <td>
                    <div style={hideedit}>
                        <div className="status editdelete" onClick={handleClickFunctionEdit}>Edit</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionDelete}>Delete</div>
                    </div>
                    <div style={showbtngroup2}>
                        <div className="status editdelete">Save</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionEdit}>Cancel</div>
                    </div>
                    <div style={showbtngroup3}>
                        <div className="status editdelete" onClick={() => handleDeleteUser()}>Confirm</div>
                        <div className="status statusbooked editdelete" onClick={handleClickFunctionCancelDelete}>Cancel</div>
                    </div>
                </td>
            </TrMainTable>
        </>
    }else if(locationname === '/contact'){
        return (edit === false) ? <>
            <TrMainTable>
                <div>
                    <td>#{data.idmessage}</td>
                </div>
                <td>{data.date}</td>
                <td>{data.customer}</td>
                <td>{data.comment}</td>
                <td>
                    {data.status === 'none' ? 
                        <div>
                            <span className="controlsmessage controlsmessage--cursor" onClick={() => handlepublish()}>
                                Publish
                            </span>
                            <span onClick={() => handlearchive()} className="controlsmessage controlsmessage--cursor">
                                Archive
                            </span>
                        </div> :
                             otherStatusMessage()
                    }
                </td>
            </TrMainTable>
        </>: <></>
    }
}
