import React, { useEffect, useState } from "react";
import { TrMainTable } from "../styles/table/table";
import handleValidateFormEditRoom from "../features/forms/validationformEditRoom";
import handleValidateFormEditBooking from "../features/forms/validationformEditBooking"
import deleteRoom from "../features/db/fecths/deleteRoom";
import { useLocation } from "react-router-dom";
import ViewBooking from "./ViewBooking";
import deleteBooking from "../features/db/fecths/deleteBooking";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Menu, MenuItem, Modal } from "@mui/material";
import { ModalNewNotes } from "../styles/table/ModalNotes";
import phonecontact from '../assets/imgs/phone.svg'
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import editRoomBooking from '../assets/imgs/edit.svg'
import MuiPhoneNumber from "mui-phone-number";
import deleteUser from "../features/db/fecths/deleteUser";
import restart from '../assets/imgs/restart.svg'
import updateStatusfetchMessage from "../features/db/fecths/updateStatusfetchMessage";
import handleValidateFormEditUser from "../features/forms/validationformEditUser";
import { appSelector } from "../features/hooks/hooks";
import { valuesEditBooking } from "../interfaces/InterfacePropsValidateFormEditBooking";
import { valuesEditUser } from "../interfaces/InterfacePropsValidateFormEditUser";
import Room from "../class/CRoom";
import fetchGetRoom from "../features/db/fecths/getRoom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';

const ITEM_HEIGHT = 48;
const options = [
    {
        tit: 'Edit',
        icon: <EditIcon className="mr-2"/>
    },
    {
        tit: 'Delete',
        icon: <DeleteIcon className="mr-2"/>
    }
];
const optionsEdit = [
    {
        tit: 'Save',
        icon: <SaveIcon className="mr-2"/>
    },
    {
        tit: 'Cancel',
        icon: <DoDisturbIcon className="mr-2"/>
    }
];
const optionSelectTypeRoom = ["Single Bed",
   "Double Bed",
    "Double Superior",
    "Suite"]

export default function RowTable(props:any){
    const {data}:any = props
    const [locationname,setLocationname] = useState(useLocation().pathname);
    const [roombooking,setRoombooking] = useState(Object);
    const [typeroomedit,setTyperoomedit] = useState<string>("")
    const [numroomedit,setNumroomedit] = useState<string>(data.room_number)
    const [facilitiesedit,setFacilitiesedit] = useState<string>(data.amenities)
    const [cancelationedit,setCancelationedit] = useState<string>(data.cancellation)
    const [descriptionedit,setDescriptionedit] = useState<string>(data.description)
    const [priceedit,setPriceedit] = useState<string>(data.price)
    const [discountedit,setDiscountedit] = useState<string>(data.discount)
    const [statusedit,setStatusedit] = useState<string>(data.status)

    const [edit,setEdit] = useState<boolean>(false)
    const [showbtngroup2,setShowbtngroup2] = useState<object>({
        display: 'none'
    })
    const [showbtngroup3,setShowbtngroup3] = useState<object>({
        display: 'none'
    })
    const [hideedit,setHideedit] = useState<object>({
        display: 'inline-block'
    })
    const [open, setOpen] = useState<boolean>(false); 
    const [bookingvisible, setBookingvisible] = useState<boolean>(false);
    const dbRoom = appSelector(state => state.dbRoom.data)
    const [openeditroombooking,setOpeneditroombooking] = useState<boolean>(false)
    const [typeroombooking,setTyperoombooking] = useState<string>("")

    const [roomselectedit,setRoomselectedit] = useState<string>("")
    const [namebookingedit,setNamebookingedit] = useState<string>("")
    const [orderdatebookingedit,setOrderdatebookingedit] = useState<string>("")
    const [checkinbookingedit,setCheckinbookingedit] = useState<string>("")
    const [checkoutbookingedit,setCheckoutbookingedit] = useState<string>("")
    const [specialrequestedit,setSpecialrequestedit] = useState<string>("")
    const [statusbookingedit,setStatusbookingedit] = useState<string>("")
    
    const [numberphonestate,setNumberphonestate] = useState<string>("")
    const [nameedituser,setNameedituser] = useState<string>("")
    const [emailedituser,setEmailedituser] = useState<string>("")
    const [descriptionedituser,setDescriptionedituser] = useState<string>("")
    const [statusedituser,setStatusedituser] = useState<string>("")

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openmore = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Modal delete
    const [opendelete, setOpendelete] = React.useState(false);
    const handleClickOpenDelete = () => {
        setOpendelete(true);
    };

    const handleCloseDelete = () => {
        setOpendelete(false);
    };
    //Modal Save
    const [openedit, setOpenedit] = React.useState(false);
    const handleClickOpenEdit = () => {
        setOpenedit(true);
        handleClose()
    };

    const handleCloseEdit = () => {
        setOpenedit(false);
    };

    useEffect(() => {
        if(locationname === '/bookings'){
            async function fetchroom(){
               const response = await fetchGetRoom(data.room_id)
               setRoombooking(response)
            }
            fetchroom()
        }
    },[])

    const handlechangeTypeRoom = (typeroom:string) => {
        setTyperoomedit(typeroom)
    }
    
    const handleClickFunctionEdit = () => {
        edit ? setEdit(!edit) : setEdit(!edit)
        handleClose()
    }
    const handleClickFunctionDelete = () => {
        handleClickOpenDelete()
        handleClose()
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
        handleCloseEdit()
        /*let objetDataSaveRoom: Object = {
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
        const response = handleValidateFormEditRoom(data._id,objetDataSaveRoom as Room)
        response === true ? handleClickFunctionEdit() : <></>*/
    }

    const handledeleteRoom = () => {
        deleteRoom(data.id)
        handleCloseDelete()
    }

    const otherState = (state:string) => {
        if(state === 'In Progress'){
            return <div className="status statusinprogress">In Progress</div>
        }else if(state === 'Check Out'){
            return <div className="status statusbooked">Check Out</div>
        }
    }
    const otherStateEdit = (state:string) => {
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
        deleteBooking(data._id)
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
        const response = handleValidateFormEditBooking(data._id,dataBookingEdit as valuesEditBooking)
        response === true ? handleClickFunctionEdit() : <></>
    }
    const handleSaveEditUser = () => {
        const dataUserEdit = {
            photo: "https://static.vecteezy.com/system/resources/previews/011/186/876/original/male-profile-picture-symbol-vector.jpg",
            name: (nameedituser !== '') ? nameedituser : data.name,
            email: (emailedituser !== '') ? emailedituser : data.email,
            description: (descriptionedituser !== '') ? descriptionedituser : data.description,
            phone: (numberphonestate !== '') ? numberphonestate : data.phone,
            status: (statusedituser !== '') ? statusedituser : data.status,
        }
        const response = handleValidateFormEditUser(data._id,dataUserEdit as valuesEditUser)
        response === true ? handleClickFunctionEdit() : <></>
    }

    const handleDeleteUser = () => {
        deleteUser(data._id)
        handleClickFunctionCancelDelete()
    }

    //Message
    const otherStatusMessage = () => {
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
        updateStatusfetchMessage(data._id,'published','Message Published')
        data.setStatus('published')
    }
    const handlearchive = () => {
        updateStatusfetchMessage(data._id,'archived','Message Archived')
        data.setStatus('archived')
    }
    const handlerestart = () => {
        updateStatusfetchMessage(data._id,'none','Message Restored')
        data.setStatus('none')
    }

    if(locationname === '/room'){
        return (edit === true) ? <>
                <Dialog
                    open={openedit}
                    onClose={handleCloseEdit}
                    aria-labelledby="draggable-dialog-title"
                >
                    <div className="p-4">
                        <DialogTitle>
                            Confirm Changes
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to save the changes made to this room? Please review them carefully before confirming.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" startIcon={<DoDisturbIcon />} onClick={handleCloseEdit}>
                                Cancel
                            </Button>
                            <Button variant="contained" endIcon={<SaveIcon />} onClick={handleClickSave}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </div>
                </Dialog>
                <TrMainTable>
                    <td className="content-evenly ml-6" style={{textAlignLast:"left",height:"inherit"}}>
                        <div className="flex block h-[150px] items-stretch ml-4">
                            <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Room" />
                            <div className="roomnameColumn content-center">
                                <span className="numtit">{`#000${data.id}`}</span>
                                <span className="deluxenum">{`${data.type_room}-`}
                                    <input onChange={(e) => setNumroomedit(e.target.value)} name="roomNumberEditable" className="text-center inputText" type="text" value={numroomedit} />
                                </span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="deluxenum">
                            <select name="typeroomEditable" className="inputSelect" onChange={(e) => handlechangeTypeRoom(e.target.value)} id="contentRoomNewRoom__roomtype">
                                {
                                    optionSelectTypeRoom.map((option) => {
                                        return option === data.type_room ? <option value={option} selected>{option}</option> : <option value={option}>{option}</option>
                                    })
                                }
                            </select>
                        </span>
                    </td>
                    <td><textarea onChange={(e) => setFacilitiesedit(e.target.value)} name="amenitiesEditable" className="textareainputroomeditable" value={facilitiesedit}></textarea></td>
                    <td><input onChange={(e) => setPriceedit(e.target.value)} name="priceEditable" className="inputText inputText--size" type="text" value={priceedit}/><span className="nightroom"> /night</span></td>
                    <td>{`$${(Number(data.price.slice(1))-((Number(data.price.slice(1))*data.discount)/100)).toFixed(2)}`}<input onChange={(e) => setDiscountedit(e.target.value)} name="discountEditable" className="inputText" value={`${discountedit}%`}></input></td>
                    <td><textarea onChange={(e) => setCancelationedit(e.target.value)} name="cancelationedit" className="textareainputroomeditable" value={cancelationedit}></textarea></td>
                    <td><textarea onChange={(e) => setDescriptionedit(e.target.value)} name="descriptionedit" className="textareainputroomeditable" value={descriptionedit}></textarea></td>
                    <td>
                        {statusedit === 'Available' ? 
                                <select onSelect={(e:any) => setStatusedit(e.target.value)} name="statusEditable" className="inputSelect inputSelect--statusAvaible">
                                    <option value="Available" selected>Available</option>
                                    <option value="Booked">Booked</option>
                                </select>
                            : 
                                <select onSelect={(e:any) => setStatusedit(e.target.value)} name="statusEditable" className="inputSelect inputSelect--statusBooked">
                                    <option value="Available">Available</option>
                                    <option value="Booked" selected>Booked</option>
                                </select>
                           }
                    </td>
                    <td style={{position:'relative'}}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={openmore ? 'long-menu' : undefined}
                            aria-expanded={openmore ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={openmore}
                            onClose={handleClose}
                            slotProps={{
                            paper: {
                                style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                                },
                            },
                            }}
                        >
                            {optionsEdit.map((option,index) => (
                                option.tit === 'Save' ?
                                <MenuItem key={index} onClick={handleClickOpenEdit}>
                                    {option.icon}
                                    {option.tit}
                                </MenuItem>
                                :
                                <MenuItem key={index} onClick={handleClickFunctionEdit}>
                                    {option.icon}
                                    {option.tit}
                                </MenuItem>
                            ))}
                        </Menu>
                    </td>
                </TrMainTable>
            </> :
            <>
                <Dialog
                    open={opendelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="draggable-dialog-title"
                >
                    <div className="p-4">
                        <DialogTitle>
                            Confirm Deletion
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this room? This action is irreversible and will permanently remove all associated data.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" startIcon={<DoDisturbIcon />} onClick={handleCloseDelete}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="error" endIcon={<DeleteIcon />} onClick={handledeleteRoom}>
                                Delete
                            </Button>
                        </DialogActions>
                    </div>
                </Dialog>

                <TrMainTable>
                    <td className="content-evenly ml-6" style={{textAlignLast:"left",height:"inherit"}}>
                        <div className="flex block h-[150px] items-stretch ml-4">
                            <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Room" />
                            <div className="roomnameColumn content-center">
                                <span className="numtit">{`#000${data.id}`}</span>
                                <span className="deluxenum mediumletter">{`${data.type_room}-${data.room_number}`}</span>
                            </div>
                        </div>
                    </td>
                    <td className="content-center pb-0 mediumletter">{data.type_room}</td>
                    <td className="content-center pb-0 mediumletter">{data.amenities}</td>
                    <td className="content-center pb-0"><span className="priceRoom">{data.price}</span><span className="nightroom"> /night</span></td>
                    <td className="content-center pb-0">{`$${(Number(data.price)-((Number(data.price)*Number(data.discount))/100)).toFixed(2)}(${data.discount}%)`}</td>
                    <td className="content-center pb-0 mediumletter">
                        <div className="w-[90%] h-3/4 overflow-y-auto content-center">
                            {data.cancellation}
                        </div>
                    </td>
                    <td className="content-center pb-0 mediumletter">
                        <div className="w-[90%] h-3/4 overflow-y-auto content-center">
                            {data.description}
                        </div>
                    </td>
                    <td>
                        {data.status === 'Available' ?
                            <div>
                                <div className="status">Available</div>
                            </div> 
                         : 
                            <div>
                                <div className="status statusbooked">Booked</div>
                            </div>}
                    </td>
                    <td style={{position:'relative'}}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={openmore ? 'long-menu' : undefined}
                            aria-expanded={openmore ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={openmore}
                            onClose={handleClose}
                            slotProps={{
                            paper: {
                                style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                                },
                            },
                            }}
                        >
                            {options.map((option,index) => (
                                option.tit === 'Edit' ?
                                <MenuItem key={index} onClick={handleClickFunctionEdit}>
                                    {option.icon}
                                    {option.tit}
                                </MenuItem>
                                :
                                <MenuItem key={index} onClick={handleClickFunctionDelete}>
                                    {option.icon}
                                    {option.tit}
                                </MenuItem>
                            ))}
                        </Menu>
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
                                            if(room.status === "Available" && room.type_room === typeroombooking){
                                                return <>
                                                    <li>
                                                        <input id="roomselected" name="roomselected" type="radio" onClick={() => setRoomselectedit(`${room.type_room}-${room.id}`)} value={`${room.type_room}-${room.id}`}/>
                                                        <span style={{marginLeft:'1em'}}>{room.type_room}-{room.room_number}</span>
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
                    <td>
                        <div className="flex items-stretch ml-4" onClick={() => handleOpenViewBooking()}>
                            <img className="imgroomnameColum" width={150} height={77} src={roombooking.photos} alt="Image Room" />
                            <div className="roomnameColumn content-center">
                                <span className="deluxenum numtit--black"><input className="inputEditBookingGuest" onChange={(e) => setNamebookingedit(e.target.value)} type="text" placeholder={data.guest} /></span>
                                <span className="numtit">{`${roombooking.type_room}-${roombooking.room_number}`}<img onClick={() => setOpeneditroombooking(true)} src={editRoomBooking} alt="Edit Reservation Room"></img></span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker
                            label={'Day,Month,Year'}
                            views={['day','month','year']}
                            className="inputDataEditBooking"
                            onChange={(e:any) => setOrderdatebookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
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
                            onChange={(e:any) => setCheckinbookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
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
                            onChange={(e:any) => setCheckoutbookingedit(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
                            />
                        </DemoContainer>
                        </LocalizationProvider>
                    </td>
                    {/* notes='true' */}
                    <td onClick={() => handleOpen}>Edit View Notes</td>
                    <td>{data.roomType}</td>
                    <td>{data.status === 'Check In' ? <select onChange={(e:any) => setStatusbookingedit(e.target.value)} className="status"><option value="Check In">Check In</option><option value="Check Out">Check Out</option><option value="In Progress">In Progress</option></select> : otherStateEdit(data.status)}</td>
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
                            <h2>{data.specialrequest}</h2>
                        </div>
                    </ModalNewNotes>
                </Modal>
                <TrMainTable>
                    <td>
                        <div className="flex items-stretch ml-4" onClick={() => setBookingvisible(true)}>
                            <img className="imgroomnameColum" width={150} height={77} src={roombooking.photos} alt="Image Room" />
                            <div className="roomnameColumn content-center">
                                <span className="deluxenum numtit--black namebooking">{`${data.guest}`}</span>
                                <span className="numtit">{`${roombooking.type_room}-${roombooking.room_number}`}</span>
                            </div>
                        </div>
                    </td>
                    <td className="content-center">{data.orderdate.toString().split("T")[0]}</td>
                    <td className="content-center"><span className="namebooking">{data.checkin.toString().split("T")[0]}</span><br/><span className="timeinbooking">{(data.checkin.toString().split("T")[1]).split("Z")[0]}</span></td>
                    <td className="content-center"><span className="namebooking">{data.checkout.toString().split("T")[0]}</span><br/><span className="timeinbooking">{(data.checkout.toString().split("T")[1]).split("Z")[0]}</span></td>
                    {/* notes='true' */}
                    <td onClick={() => handleOpen()}><span className="block h-max py-5 bg-emerald-400 rounded-full">View Notes</span></td>
                    <td className="content-center namebooking">{roombooking.type_room}</td>
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
                <td>
                    <div className="flex items-stretch ml-4">
                        <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Employee" />
                        <div className="roomnameColumn content-center">
                            <input onChange={(e:any) => setNameedituser(e.target.value)} className="inputEditBookingGuest" style={{height:'3em'}} type="text" name="nameuseredit" placeholder={data.name} />
                            <span className="deluxenum">#{data.id}<br/>Joined on {data.startdate}</span>
                        </div>
                    </div>
                </td>
                <td className="descriptionemployee textareainputbookingeditable"><textarea onChange={(e) => setDescriptionedituser(e.target.value)} className="textareainputroomeditable" placeholder={data.description} name="descriptionuseredit"></textarea></td>
                <td style={{alignContent: 'stretch'}} className="contactemployee">
                    <MuiPhoneNumber style={{display:'block'}} defaultCountry={'es'} onChange={(e:any) => setNumberphonestate(e.target.value)}/>
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
                <td>
                    <div className="flex items-stretch ml-4">
                        <img className="imgroomnameColum" width={150} height={77} src={data.photo} alt="Image Employee" />
                        <div className="roomnameColumn content-center">
                            <span className="nameemployee">{data.name}</span>
                            <span className="deluxenum">#{data.id}<br/>Joined on {data.startdate.toString().split("T")[0]}</span>
                        </div>
                    </div>
                </td>
                <td className="descriptionemployee">{data.description ? data.description : "Not Description"}</td>
                <td className="contactemployee"><span><img src={phonecontact} alt="Contact Employee" />{data.phone ? data.phone : "Not Phone"}</span><br /><span>{data.email}</span></td>
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
                <td>
                    <div>#000{data.id}</div>
                </td>
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

/*<div style={hideedit}>
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
                        </div> */