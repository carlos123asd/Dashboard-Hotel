import BtnTopNew from "../styles/table/BtnTopNew";
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import imagestandar from '../assets/imgs/logo.svg';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useLocation } from "react-router-dom";
import dataroom from '../data/room.json'

export default function BtnTableTopNew({title}){
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
    
   const location = useLocation().pathname;
    
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

    const handlesubmitnewRoom = async (event) => {
        event.preventDefault()
        console.log( event.target.facilities8.checked)
        if(event.target.roomnumber.value === "" || event.target.price.value === '' ||
             event.target.price.value === '' || event.target.price.value === '' ||
              event.target.price.value === '' || event.target.photourl1.value === '' ||
               event.target.photourl2.value === '' || event.target.photourl3.value === '' || 
            /^[0-9]*$/.test(event.target.roomnumber.value) === false || /^[0-9]*$/.test(event.target.price.value) === false)
            {

            if(event.target.roomnumber.value !== ""){
                if(/^[0-9]*$/.test(event.target.roomnumber.value) === false){
                    Toastify({
                        text: "Room Number: Only Number",
                        duration: 3000,
                        gravity: 'top',
                        position: 'center',
                        style:{
                            background: '#E23428'
                        }
                    }).showToast();
                }
            }else{
                Toastify({
                    text: "Room Number: Necessary value",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }

            if(event.target.price.value !== ''){
                if(/^[0-9]*$/.test(event.target.price.value) === false){
                    Toastify({
                        text: "Price: Only Number",
                        duration: 3000,
                        gravity: 'top',
                        position: 'center',
                        style:{
                            background: '#E23428'
                        }
                    }).showToast();
                }
            }else{
                Toastify({
                    text: "Price: Necessary value",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }

            if(event.target.textareadescription.value === ''){
                Toastify({
                    text: "Description: Necessary description of the room",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }
            if(event.target.textareapolicy.value === ''){
                Toastify({
                    text: "Cancellation policies: Necessary Cancellation policies",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }
            if(event.target.offers.value === 'yes'){
                if(event.target.numdescuento.value === ''){
                    Toastify({
                        text: "Offer: Percentage of Offer Required",
                        duration: 3000,
                        gravity: 'top',
                        position: 'center',
                        style:{
                            background: '#E23428'
                        }
                    }).showToast();
                }
            }
            if(event.target.photourl1.value === '' || event.target.photourl2.value === '' || event.target.photourl3.value === ''){
                Toastify({
                    text: "URL Photo: Required, min 3",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }
            if(event.target.facilities1.checked === false && event.target.facilities2.checked === false && event.target.facilities3.checked === false
                && event.target.facilities4.checked === false && event.target.facilities5.checked === false && event.target.facilities6.checked === false
                && event.target.facilities7.checked === false && event.target.facilities8.checked === false){
                Toastify({
                    text: "Facilities: Required, min 1",
                    duration: 3000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#E23428'
                    }
                }).showToast();
            }
        }else{
            const options = {
                    "roomNumber": event.target.roomnumber.value,
                    "photo": [
                        event.target.photourl1.value,
                        event.target.photourl2.value,
                        event.target.photourl3.value
                    ],
                    "typeRoom": event.target.selectroomtype.value,
                    "description": event.target.textareadescription.value,
                    "offer": event.target.offers.value === 'yes' ? true : false,
                    "price":  event.target.price.value,
                    "discount": event.target.numdescuento.value,
                    "cancellation": event.target.textareapolicy.value,
                    "idRoom": Math.floor(Math.random()*3000),
                    "status": "Available",
                    "amenities": `${event.target.facilities1.value},${event.target.facilities2.value},${event.target.facilities3.value},
                    ${event.target.facilities4.value},${event.target.facilities5.value},${event.target.facilities6.value},${event.target.facilities7.value},
                    ${event.target.facilities8.value},`
            }
            fetch('http://localhost:5173/src/data/room.json',{
                method: 'POST',
                body: JSON.stringify(options), //Objeto -> JSON
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(jsondatos => {
                console.log(jsondatos);
            }).catch((error) => {
                console.log(error);
            })
            Toastify({
                text: "Room Created Successfully",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    background: '#135846'
                }
            }).showToast();
        }
    }

    if(location === '/room'){
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
            <ModalNewRoom>
                <h1>{title}</h1>
                <div className="contentRoomNewRoom">
                    <form onSubmit={e => handlesubmitnewRoom(e)} action="">
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
                                <input onChange={event => handleOffer(event.target.value)} id="offer" name="offers" type="radio" value="yes" />Yes
                            </div>
                            <div>
                                <input onChange={event => handleOffer(event.target.value)} id="offer" name="offers" type="radio" value="no" />No
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
                                <li><input id="roomcancellation" name="facilities1" type="checkbox" value='AC'/>AC</li>
                                <li><input id="roomcancellation" name="facilities2" type="checkbox" value='Shower'/>Shower</li>
                                <li><input id="roomcancellation" name="facilities3" type="checkbox" value='Towel'/>Towel</li>
                                <li><input id="roomcancellation" name="facilities4" type="checkbox" value='Bathup'/>Bathup</li>
                            </div>
                            <div>
                                <li><input id="roomcancellation" name="facilities5" type="checkbox" value='Coffee Set'/>Coffee Set</li>
                                <li><input id="roomcancellation" name="facilities6" type="checkbox" value='LED TV'/>LED TV</li>
                                <li><input id="roomcancellation" name="facilities7" type="checkbox" value='Wifi'/>Wifi</li>
                                <li><input id="roomcancellation" name="facilities8" type="checkbox" value='Room Service'/>Room Service</li>
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
                        <form action="">
                            <h2>Booking Details</h2>
                            <div className="sectionformbooking">
                                <div className="contentRoomNewRoom__firstblock">
                                    <label htmlFor="nameguest">Guest</label>
                                    <input className="inputroom" id="nameguest" name="nameguest" type="text" placeholder="Carlos Alexander Medina Salas"></input>
                                </div>
                                <div className="contentRoomNewRoom__firstblock">
                                    <label htmlFor="orderdate">Order Date </label>
                                    <input onChange={event => handleRoomNumber(event.target.value)} id="orderdate " name="orderdate" type="datetime-local" placeholder="30 Apr 2024 09:35 am"></input>
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
                        </form>

                        <div className="contentRoomInfo contentbooking">
                            <div>
                                <ul>
                                    {
                                        dataroom.map(room => {
                                            if(room.status === "Available" && room.typeRoom === Typeroombooking){
                                                return <>
                                                    <li><input id="roomselected" name="roomselected" type="checkbox" value={`${room.typeRoom}-${room.roomNumber}`}/>{room.typeRoom}-{room.roomNumber}</li>
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
        </>
    }
}