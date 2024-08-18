import BookingView from "../styles/viewbooking/BookingView";
import call from '../assets/imgs/call.svg'
import message from '../assets/imgs/message.svg'
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import next from '../assets/imgs/arrow.svg'
import back from '../assets/imgs/arrow.svg'
import rooms from '../data/room.json'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbThunk } from "../features/db/dbThunk";

export default function ViewBooking({booking}){
    console.log(booking)
    /*const roomselected = (rooms.filter(room => {
        return room.idRoom === booking.idRoom
    }))[0]*/
   // console.log(roomselected)
    const dispatch = useDispatch()
    const stateDbStatus = useSelector(state => state.db.status);
    const selectorDbData = useSelector(state => state.db.data);
    const selectorDbError = useSelector(state => state.db.error);
    const [loading,setLoading] = useState(true);
    const [roomSelected,setRoomSelected] = useState([])

    //Ver view y roomselect para traer datos Room y no bookings
   useEffect(() =>{
        if(stateDbStatus === 'idle'){
            dispatch(dbThunk('rooms'));
        }else if(stateDbStatus === 'fulfilled'){
            setLoading(false);
            setRoomSelected(selectorDbData.filter((room) => {
                return room.id === booking.idRoom
            }))
        }else if(stateDbStatus === 'rejected'){
            console.log(selectorDbError)
        }
    },[stateDbStatus])

    console.log(roomSelected)
    if(loading === false){
        return <>
            <BookingView>
                <div>
                    <div>
                        <div>
                            <div className="infobooking">
                                <div className="imagenperfil"></div>
                                <div>
                                    <span>{booking.guest}</span>
                                    <span>ID {booking.id}</span>
                                    <div>
                                        <img className="bookingcall" src={call} alt="call booking" />
                                        <div className="bookingmessage"><img src={message} alt="message booking" />Send Message</div>
                                    </div>
                                </div>
                            </div>
                            <div className="morebooking"></div>
                        </div>
                    </div>
                    <div className="checkinout">
                        <div>
                            <span>Check In</span>
                            <span>{booking.checkin} | {booking.timein}</span>
                        </div>
                        <div>
                            <span>Check Out</span>
                            <span>{booking.checkout} | {booking.timeout}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="roominfo">
                        <div>
                            <span>Room Info</span>
                            <span>{booking.roomType}</span>
                        </div>
                        <div>
                            <span>Price</span>
                            <span>{roomSelected.price} <span>/night</span></span>
                        </div>
                    </div>
                    <p>
                        {booking.specialRequest}
                    </p>

                    <div className="facilitiesbooking">
                        <span>Facilities</span>
                        {
                            roomSelected.amenities.split(',').map((amenitie) => {
                                    return <>
                                        <div>{amenitie}</div>
                                    </> 
                            })
                        }
                    </div>
                </div>
                <div className="imagesbooking">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={1}
                        navigation={{ 
                                        nextEl: '.btnnextBooking',
                                        prevEl: '.btnbackBooking'
                                    }}
                        className="ReviewCustomersContent"
                    >
                        {
                            roomSelected.photo.map((img) => {
                                return <>
                                    <SwiperSlide>
                                            <div style={{backgroundImage:`url('${img}')`}} className="imagebookingRight" alt="Room of the Booking"></div>
                                            <div className="contentninfoRoomBooking">
                                                <h2 className="titroom">{roomSelected.typeRoom}</h2>
                                                <p className="descriptionroom">{roomSelected.description}</p>
                                            </div>
                                    </SwiperSlide>
                                </> 
                            })
                        }
                        <div className="contentNavigationBooking">
                            <div className="btnbackBooking"><img src={next} width={24} height={'100%'} alt="Next Element" /></div>
                            <div className="btnnextBooking"><img src={back} width={24} height={'100%'} alt="Back Element" /></div>
                        </div>
                    </Swiper>
                </div>
            </BookingView>
        </>
    }
}