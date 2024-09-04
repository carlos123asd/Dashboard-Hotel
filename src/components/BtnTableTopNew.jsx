import BtnTopNew from "../styles/table/BtnTopNew";
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import imagestandar from '../assets/imgs/logo.svg';
import "toastify-js/src/toastify.css"
import { useLocation } from "react-router-dom";
import handlesubmitnewRoom from "../features/forms/validationformNewRoom";
import handlesubmitnewBooking from "../features/forms/validationformNewBooking";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';
import MuiPhoneNumber from 'mui-phone-number';
import { useSelector } from "react-redux";
import validationNewuser from '../features/forms/validationformNewUser'

export default function BtnTableTopNew({title,databooking}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [typeroom,setTyperoom] = useState('Single Bed');
    const [roomnumber,setRoomNumber] = useState('91234');
    const [offer,setOffer] = useState('No Offer');
    const [display,setDisplay] = useState({display: 'none'});
    const [price,setPrice] = useState(0);
    const [total,setTotal] = useState(offer === 'No Offer' ? price : (price-((price*offer)/100)));
    const [image1,setImage1] = useState(imagestandar);
    const [image2,setImage2] = useState(imagestandar);
    const [image3,setImage3] = useState(imagestandar);
    const [Typeroombooking,setTyperoombooking] = useState('Single Bed');
    const [startdateuser,setStartdateuser] = useState("")
    const [numberphonestate,setNumberphonestate] = useState("")
    const dataRooms = useSelector(state => state.db.data.rooms)
    const dataBookings = useSelector(state => state.db.data.bookings)
    const dataUser = useSelector(state => state.db.data.employee)
    const location = useLocation().pathname;
    const [roomid,setRoomid] = useState("")
    
    useEffect(() => {
        if(open){
            setPrice(0)
            setTotal(0)
            setOffer('No Offer')
            setImage1(imagestandar)
            setImage2(imagestandar)
            setImage3(imagestandar)
        }
    },[open])

    const handleTypeRoom = value => {
        if(value === 'Single Bed'){
            setTyperoom('Single Bed');
        }else if(value === 'Double Bed'){
            setTyperoom('Double Bed');
        }
        else if(value === 'Double Superior'){
            setTyperoom('Double Superior');
        }
        else if(value === 'Suite'){
            setTyperoom('Suite');
        }
    }

    const handleRoomNumber = value => {
        setRoomNumber(parseInt(value));
        if(value === "")
            setRoomNumber('91234');
    }

    const handleOffer = value => {
        if(value === 'yes'){
            setOffer('With offer')
            setDisplay({display: 'inline-block'})
            if(parseInt(value) > 0){
                setTotal((price-((price*parseInt(value))/100)).toFixed(2))
            }else{
                setTotal(price)
            }
        }else if(value === 'no'){
            setOffer('No offer')
            setDisplay({display: 'none'})
            setTotal(price)
        }
    }

    const handleOfferNum = value => {
        setOffer(`${value}`)
        setTotal((price-((price*parseInt(value))/100)))
    }

    const handlePrice = value => {
        setPrice(`${value}`)
        if(parseInt(offer) > 0){
            setTotal((value-((value*parseInt(offer))/100)).toFixed(2))
        }
        else if(offer === 'No Offer'){
            setTotal(value)
        }
        else if(value > 0){
            setTotal(value)
        }
    }

    const handleUrl1 = (value) => {
        setImage1(value)
        if(value === ""){
            setImage1(imagestandar)
        }
    }
    const handleUrl2 = (value) => {
        setImage2(value)
        if(value === ""){
            setImage2(imagestandar)
        }
    }
    const handleUrl3 = (value) => {
        setImage3(value)
        if(value === ""){
            setImage3(imagestandar)
        }
    }

    const validFormRoom = (e) => {
        let lastObjectRoom = dataRooms.map((room) => {
            return room
        }).sort((a,b) => a.id - b.id)
        let idnew = ((lastObjectRoom[lastObjectRoom.length - 1]).id) + 1
        handlesubmitnewRoom(e,idnew)
        handleClose()
    }

    const validFormBooking = (e) => {
        let lastObjectBooking = dataBookings.map((booking) => {
            return booking
        }).sort((a,b) => a.id - b.id)
        let idnew = ((lastObjectBooking[lastObjectBooking.length - 1]).id) + 1
        const response = handlesubmitnewBooking(e,idnew,roomid)
        response === true ? handleClose() : <></>
    }

    const validFormUser = (e) => {
        e.preventDefault()
        const lengthuser = (dataUser.length).toString()
        const newuser = {
            id: lengthuser,
            photo: [
                "https://static.vecteezy.com/system/resources/previews/011/186/876/original/male-profile-picture-symbol-vector.jpg"
            ],
            name: `${e.target.nameuser.value}`,
            email: `${e.target.emailuser.value}`,
            startdate: `${startdateuser}`,
            description: `${e.target.descriptionuser.value}`,
            phone: `${numberphonestate}`,
            status: `${e.target.statususer.value}`
        }
        validationNewuser(newuser)
        handleClose()
    }


    if(location === '/room'){
        return <>
        <BtnTopNew>
            <div data-testid="element-new" onClick={handleOpen} className="contentBtn">
                + {title}
            </div>
        </BtnTopNew>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{alignContent: 'center'}}
        >
            <ModalNewRoom>
                <h1>{title}</h1>
                <div className="contentRoomNewRoom">
                    <form onSubmit={e => validFormRoom(e)} action="">
                        <h2>Room Detail</h2>
                        <div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="roomtype">Room Type</label>
                                <select name="selectroomtype" onChange={event => handleTypeRoom(event.target.value)} id="contentRoomNewRoom__roomtype">
                                    <option value={'Single Bed'}>Single Bed</option>
                                    <option value={'Double Bed'}>Double Bed</option>
                                    <option value={'Double Superior'}>Double Superior</option>
                                    <option value={'Suite'}>Suite</option>
                                </select>
                            </div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="roomnumber">Room Number</label>
                                <input onChange={event => handleRoomNumber(event.target.value)} id="roomnumber" name="roomnumber" type="text" placeholder="91234"></input>
                            </div>
                        </div>
                        
                        <br />
                        <label htmlFor="roomdescription">Description</label>
                        <textarea id="roomdescription" name="textareadescription" placeholder="Description of the room"></textarea>
                        <h2>Prices</h2>
                        <div className="contentRoomNewRoom__priceblock">
                            <label htmlFor="offer">Offer</label>
                            <div>
                                <input onChange={event => handleOffer(event.target.value)} id="offer" name="offers" type="radio" value="true" />Yes
                            </div>
                            <div>
                                <input onChange={event => handleOffer(event.target.value)} id="offer" name="offers" type="radio" value="false" />No
                            </div>
                        </div>
                        <div style={display} className="contentRoomNewRoom__pricesecondblock">
                            <div>%</div>
                            <input onChange={event => handleOfferNum(event.target.value)} name="numdescuento" type="text" placeholder="23" />
                        </div>

                        <div className="contentRoomNewRoom__pricethreeblock">
                            <label htmlFor="price">Price</label>
                            <div>
                                <div>$</div>
                                <input onChange={event => handlePrice(event.target.value)} name="price" id="price" type="text" placeholder="323" />
                            </div>
                        </div>

                        <label htmlFor="roomcancellation">Cancellation policies</label>
                        <textarea name="textareapolicy" id="roomcancellation" placeholder="Cancellation policies"></textarea>
                        <h2>Others</h2>
                        <label htmlFor="roomcancellation">Facilities</label>
                        <ul>
                            <div>
                                <li><input name="facilities1" type="checkbox" value='AC'/>AC</li>
                                <li><input name="facilities2" type="checkbox" value='Shower'/>Shower</li>
                                <li><input name="facilities3" type="checkbox" value='Towel'/>Towel</li>
                                <li><input name="facilities4" type="checkbox" value='Bathup'/>Bathup</li>
                            </div>
                            <div>
                                <li><input name="facilities5" type="checkbox" value='Coffee Set'/>Coffee Set</li>
                                <li><input name="facilities6" type="checkbox" value='LED TV'/>LED TV</li>
                                <li><input name="facilities7" type="checkbox" value='Wifi'/>Wifi</li>
                                <li><input name="facilities8" type="checkbox" value='Room Service'/>Room Service</li>
                            </div>
                        </ul>
                        
                        <label htmlFor="">Photos</label>
                        <label htmlFor="uriphoto1">URL Image 1</label>
                        <input onChange={event => handleUrl1(event.target.value)} name="photourl1" id="uriphoto1" type="text" placeholder="URL PHOTO"></input>
                        <label htmlFor="uriphoto2">URL Image 2</label>
                        <input onChange={event => handleUrl2(event.target.value)} name="photourl2" id="uriphoto2" type="text" placeholder="URL PHOTO"></input>
                        <label htmlFor="uriphoto3">URL Image 3</label>
                        <input onChange={event => handleUrl3(event.target.value)} name="photourl3" id="uriphoto3" type="text" placeholder="URL PHOTO"></input>

                        <div style={{textAlign:"right"}}>
                            <input type="submit" value={'SAVE'}/>   
                        </div>
                        
                    </form>
                    <div className="contentRoomInfo">
                        <div>
                            <div>
                                <img src={image1} alt="" />
                                <img src={image2} alt="" />
                                <img src={image3} alt="" />
                            </div>
                            <h2>{`${typeroom} ${roomnumber}`}</h2>
                            <span className="contentRoomInfo__num">#32334</span>
                            <span className="contentRoomInfo__num">Price: {price}$</span>
                            <span className="contentRoomInfo__num">Offer: {offer}(%)</span>
                            <span className="contentRoomInfo__num">Total: {total}$</span>
                        </div>
                    </div>
                </div>
            </ModalNewRoom>
        </Modal>
        </>
    }else if(location === '/bookings'){
        return <>
            <BtnTopNew>
                <div onClick={handleOpen} className="contentBtn">
                    + {title}
                </div>
            </BtnTopNew>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{alignContent: 'center'}}
            >
                <ModalNewRoom className="modalbooking">
                    <h1>{title}</h1>
                    <div className="contentRoomNewRoom">
                        <form onSubmit={e => validFormBooking(e)} action="">
                            <h2>Booking Details</h2>
                            <div className="sectionformbooking">
                                <div className="contentRoomNewRoom__firstblock">
                                    <label htmlFor="nameguest">Guest</label>
                                    <input className="inputroom" id="nameguest" name="nameguest" type="text" placeholder="Carlos Alexander Medina Salas"></input>
                                </div>
                            </div>

                            <h2>Check in-out</h2>
                            <div className="contentRoomNewRoom__priceblock sectionformbooking">
                                <label htmlFor="checkin">Check in</label>
                                <div className="checkbooking">
                                    <input  id="checkin" name="checkin" type="datetime-local" placeholder="01 May 2024 09:00 am"/>
                                </div>
                                <label htmlFor="checkout">Check Out</label>
                                <div className="checkbooking">
                                    <input  id="checkout" name="checkout" type="datetime-local" placeholder="05 May 2024 12:00 am"/>
                                </div>

                                <label htmlFor="specialrequest">Special Request</label>
                                <textarea name="specialrequest" id="specialrequest" placeholder="Special Request(Notes)"></textarea>
                            </div>

                            <h2>Room</h2>
                            <div className="contentRoomNewRoom__firstblock sectionformbooking">
                                    <label htmlFor="roomtype">Room Type</label>
                                    <select name="selectroomtype" onChange={event => setTyperoombooking(event.target.value)} id="contentRoomNewRoom__roomtype">
                                        <option value={'Single Bed'}>Single Bed</option>
                                        <option value={'Double Bed'}>Double Bed</option>
                                        <option value={'Double Superior'}>Double Superior</option>
                                        <option value={'Suite'}>Suite</option>
                                    </select>
                            </div>

                            <div style={{textAlign:"right"}}>
                                <input type="submit" value={'SAVE'}/>   
                            </div>
                        </form>
                        
                        <div className="contentRoomInfo contentbooking">
                            <div>
                                <ul>
                                    {
                                        dataRooms.map(room => {
                                            if(room.status === "Available" && room.typeRoom === Typeroombooking){
                                                return <>
                                                    <li><input onChange={() => setRoomid(room.id)} type="checkbox" value={room.id}/>{room.typeRoom}-{room.roomNumber}</li>
                                                </>
                                            }
                                            
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </ModalNewRoom>
            </Modal>
        </>
    }else if(location === '/users'){
        return <>
        <BtnTopNew>
                <div onClick={handleOpen} className="contentBtn">
                    + {title}
                </div>
        </BtnTopNew>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{alignContent: 'center'}}
        >
            <ModalNewRoom style={{padding:'2.5em',width:'50%'}}>
                <h1>{title}</h1>
                <div className="contentRoomNewRoom">
                    <form onSubmit={e => validFormUser(e)} action="">
                        <h2>Employee Details</h2>
                        <div className="sectionformbooking sectionformbooking--inputdetailemployee">
                            <div className="contentRoomNewRoom__firstblock contentRoomNewRoom--margin">
                                <label htmlFor="nameguest">Name</label>
                                <input className="inputroom" id="nameuser" name="nameuser" type="text" placeholder="Carlos Alexander Medina Salas"></input>
                            </div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="nameguest">Email</label>
                                <input className="inputroom" id="emailuser" name="emailuser" type="text" placeholder="carlos-medin@hotmail.com"></input>
                            </div>
                        </div>

                        <h2>Start Date</h2>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                                    <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                                        <DatePicker
                                        label={'Day,Month,Year'}
                                        views={['day','month','year']}
                                        onChange={(e) => setStartdateuser(`${e.clone().$D} ${((e.clone()).toString()).split(' ')[2]} ${((e.clone()).toString()).split(' ')[3]}`)}
                                        />
                                    </DemoContainer>
                            </LocalizationProvider>
                        </div>
                            
                        <div style={{marginTop:'1em'}} className="contentRoomNewRoom__priceblock sectionformbooking">
                            <label htmlFor="specialrequest">Description of the employee</label>
                            <textarea name="descriptionuser" id="specialrequest" placeholder="Description..."></textarea>
                        </div>

                        <h2>Contact</h2>
                        <div className="sectionformbooking">
                            <label htmlFor="specialrequest">Phone</label>
                            <MuiPhoneNumber style={{display:'block'}} defaultCountry={'es'} onChange={(e) => setNumberphonestate(e)}/>
                        </div>

                        <div className="contentRoomNewRoom__firstblock sectionformbooking">
                                <label style={{display:'inline-block',marginRight:'1em'}} htmlFor="roomtype">Status</label>
                                <select style={{display:'inline-block'}} name="statususer">
                                    <option value={'Active'}>Active</option>
                                    <option value={'Inactive'}>Inactive</option>
                                </select>
                        </div>

                        <div style={{textAlign:'right'}}>
                             <input type="submit" value="Save"/>
                        </div>
                    </form>
                </div>
            </ModalNewRoom>
        </Modal>
        </>
    }
}