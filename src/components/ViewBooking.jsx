import BookingView from "../styles/viewbooking/BookingView";
import call from '../assets/imgs/call.svg'
import message from '../assets/imgs/message.svg'
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import next from '../assets/imgs/arrow.svg'
import back from '../assets/imgs/arrow.svg'
import rooms from '../data/room.json'
import { useEffect, useState } from "react";

export default function ViewBooking({booking}){
    console.log(booking)
    const roomselected = (rooms.filter(room => {
        return room.idRoom === booking.idroom
    }))[0]
    console.log(roomselected)
    return <>
        <BookingView>
            <div>
                <div>
                    <div>
                        <div className="infobooking">
                            <div className="imagenperfil"></div>
                            <div>
                                <span>{booking.guest}</span>
                                <span>ID {booking.idbooking}</span>
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
                        <span>{roomselected.price} <span>/night</span></span>
                    </div>
                </div>
                <p>
                    {booking.specialRequest}
                </p>

                <div className="facilitiesbooking">
                    <span>Facilities</span>
                    {
                        roomselected.amenities.split(',').map((amenitie) => {
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
                        roomselected.photo.map((img) => {
                            return <>
                                <SwiperSlide>
                                        <div style={{backgroundImage:`url('${img}')`}} className="imagebookingRight" alt="Room of the Booking"></div>
                                        <div className="contentninfoRoomBooking">
                                            <h2 className="titroom">{roomselected.typeRoom}</h2>
                                            <p className="descriptionroom">{roomselected.description}</p>
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