import BookingView from "../styles/viewbooking/BookingView";
import call from '../assets/imgs/call.svg'
import message from '../assets/imgs/message.svg'
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import next from '../assets/imgs/arrow.svg'
import back from '../assets/imgs/arrow.svg'
import { useSelector } from "react-redux";
import logo from '../assets/imgs/logo.svg'

export default function ViewBooking(booking){
    booking = booking.booking
    console.log(booking)
    const dbRoom = useSelector(state => state.db.data.rooms)
    console.log(dbRoom)
    const roomselected = dbRoom.filter((room) => {
        return room.id === booking.idRoom
    })
    console.log(roomselected[0].amenities)
        return <>
            <BookingView>
                <div>
                    <div>
                        <div>
                            <div className="infobooking">
                                <img src={logo} alt="Logo Booking" />
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
                            <span>{roomselected[0].price} <span>/night</span></span>
                        </div>
                    </div>
                    <p>
                        {booking.specialRequest}
                    </p>

                    <div className="facilitiesbooking">
                        <span>Facilities</span>
                        {
                            roomselected[0].amenities.split(',').map((amenitie) => {
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
                            roomselected[0].photo.map((img) => {
                                return <>
                                    <SwiperSlide>
                                            <div style={{backgroundImage:`url('${img}')`}} className="imagebookingRight" alt="Room of the Booking"></div>
                                            <div className="contentninfoRoomBooking">
                                                <h2 className="titroom">{roomselected[0].typeRoom}</h2>
                                                <p className="descriptionroom">{roomselected[0].description}</p>
                                            </div>
                                            {roomselected[0].status === 'Available' ? <div className="statusBooking statusBooking--available">{roomselected[0].status}</div> : <div className="statusBooking statusBooking--booked">{roomselected[0].status}</div>}
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