import BookingView from "../styles/viewbooking/BookingView";
import call from '../assets/imgs/call.svg'
import message from '../assets/imgs/message.svg'
import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import next from '../assets/imgs/arrow.svg'
import back from '../assets/imgs/arrow.svg'

export default function ViewBooking({booking}){
    console.log(booking)
    //HACER UN NUEVO MOCKEADO CON EL ID DE RESERVA Y ID DE ROOM
    return <>
        <BookingView>
            <div>
                <div>
                    <div>
                        <div className="infobooking">
                            <div className="imagenperfil"></div>
                            <div>
                                <span>{booking.guest}</span>
                                <span>ID 1234124512551</span>
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
                        <span>$145 <span>/night</span></span>
                    </div>
                </div>
                <p>
                    {booking.specialRequest}
                </p>

                <div className="facilitiesbooking">
                    <span>Facilities</span>
                    <div>3 Bed Space</div>
                </div>
            </div>
            <div className="imagesbooking">
                <div className="barbooking">Booked</div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={3}
                    navigation={{ 
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                     className="ReviewCustomersContent"
                >
                        <SwiperSlide style={{width:431.667}}>
                            <div className="ReviewCustomersContent__review">
                                    <img width={'100%'} height={'100%'} src='' alt="Room of the Booking" />
                                    <h2></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </SwiperSlide>
                    <div className="swiper-button-prev btnnextswiperReview"><img src={next} width={24} height={'100%'} alt="Next Element" /></div>
                    <div className="swiper-button-next btnnextswiperReview"><img src={back} width={24} height={'100%'} alt="Back Element" /></div>
                </Swiper>
            </div>
        </BookingView>
    </>
}