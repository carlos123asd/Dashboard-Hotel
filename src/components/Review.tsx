
import { ReviewCustomers } from "../styles/dashboard/ReviewCustomers"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import next from '../assets/imgs/arrow.svg'
import back from '../assets/imgs/arrow.svg'
import  profile from '../assets/imgs/menu/lateral/perfil.jpg'
import { useEffect, useState } from "react";
import updateStatusfetchMessage from "../features/db/fecths/updateStatusfetchMessage";
import Message from "../class/CMessage";
import { appDispatch, appSelector } from "../features/hooks/hooks";
import { dbThunkMessage } from "../features/db/thunks/dbThunkMessage";


export default function Review(){
    const stateDbStatusdbMessage = appSelector(state => state.dbMessage.status)
    const selectorDbErrordbMessage = appSelector(state => state.dbMessage.error)
    const stateDbDatadbMessage = appSelector(state => state.dbMessage.data)
    const [loading,setLoading] = useState<boolean>(true)
    const dispatch = appDispatch()


    useEffect(() =>{
        if(stateDbStatusdbMessage === 'idle'){
            dispatch(dbThunkMessage());
        }else if(stateDbStatusdbMessage === 'fulfilled'){
            setLoading(false);
        }else if(stateDbStatusdbMessage === 'rejected'){
            console.error(selectorDbErrordbMessage)
        }
    },[stateDbStatusdbMessage])
    /*
    const [datamessage,setDatamessage] = useState(stateDbDatadbMessage.filter((message:Message) => {
        return message.status === 'none'
    }))

    const updateDataMessage = (id:string) => {
        setDatamessage(datamessage.filter((message:Message) => {
            return message._id !== id
        }))
    } */

    const handlePublish = (message:Message) => {
        //updateDataMessage(message._id)
        updateStatusfetchMessage(message._id,'published','Message published')
    }
    const handleArchive = (message:Message) => {
        //updateDataMessage(message._id)
        updateStatusfetchMessage(message._id,'archived','Message archived')
    }

    console.log(stateDbDatadbMessage);

    if(loading === false){
        return <>
        <ReviewCustomers>
            <h2>Latest Review by Customers</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={150}
                slidesPerView={3}
                navigation={{ 
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                breakpoints= {{
                        1000:{
                            slidesPerView: 1
                        },
                        1400: {
                            slidesPerView: 2
                        },
                        1900:{
                            slidesPerView: 3
                        }
                    }}
                className="ReviewCustomersContent"
            >
                {
                    stateDbDatadbMessage.map((comment:Message) => {
                        return <>
                            <SwiperSlide style={{width:'max-content',height:'100%'}}>
                                <div className="ReviewCustomersContent__review">
                                    <p>{comment.comment}</p>
                                    <div className="ReviewCustomersContent__review__contentinfo">
                                        <div>
                                            <div className="ReviewCustomersContent__review__contentinfo__img">
                                                <img width={'100%'} height={'100%'} src={profile} alt="Image Profile by Customers" />
                                            </div>
                                            <div className="ReviewCustomersContent__review__contentinfo__tits">
                                                <span className="ReviewCustomersContent__review__contentinfo__tits__tit">{comment.customer}</span>
                                                <span className="ReviewCustomersContent__review__contentinfo__tits__sub">{comment.date}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="ReviewCustomersContent__review__contentinfo__state">
                                            <svg onClick={() => handlePublish(comment)} width="23" height="22" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.49998 11.6667C3.44521 11.6667 0.960205 9.17456 0.960205 6.1111C0.960205 3.04763 3.44521 0.555542 6.49998 0.555542C9.55474 0.555542 12.0398 3.04763 12.0398 6.1111C12.0398 9.17456 9.55474 11.6667 6.49998 11.6667ZM6.49998 1.29628C3.85294 1.29628 1.69884 3.45652 1.69884 6.1111C1.69884 8.76567 3.85294 10.9259 6.49998 10.9259C9.14701 10.9259 11.3011 8.76567 11.3011 6.1111C11.3011 3.45652 9.14701 1.29628 6.49998 1.29628ZM6.02263 7.85462L9.34649 4.52129C9.49099 4.37638 9.49099 4.14259 9.34649 3.99767C9.20199 3.85276 8.96887 3.85276 8.82437 3.99767L5.7618 7.06896L4.54583 5.84953C4.40133 5.70461 4.1682 5.70461 4.0237 5.84953C3.8792 5.99444 3.8792 6.22823 4.0237 6.37314L5.50098 7.85462C5.57299 7.92684 5.66764 7.96296 5.76226 7.96296C5.8569 7.96296 5.95062 7.92684 6.02263 7.85462Z" fill="#5AD07A"/>
                                            </svg>

                                            <svg onClick={() => handleArchive(comment)} width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.21743 8.91039C8.07493 8.91039 7.92868 8.85339 7.81993 8.74319L4.38493 5.26239C4.16368 5.03819 4.16368 4.67719 4.38493 4.45679C4.60618 4.23259 4.96243 4.23259 5.17993 4.45679L8.61493 7.93759C8.83618 8.16179 8.83618 8.52279 8.61493 8.74319C8.50618 8.85339 8.35993 8.91039 8.21743 8.91039Z" fill="#E23428"/>
                                            <path d="M6.49999 12.3636C3.27124 12.3636 0.64624 9.7036 0.64624 6.4318C0.64624 3.16 3.27124 0.5 6.49999 0.5C9.72874 0.5 12.1249 3.16 12.1249 6.4318C12.1249 9.7036 9.72874 12.3636 6.49999 12.3636ZM6.49999 1.33179C3.89374 1.33179 1.34364 3.7908 1.34364 6.4318C1.34364 9.0728 4.08458 11.8352 6.5 11.5C9 11.942 11.6698 8.81537 11.4275 6.4318C11.5776 3.83179 9.09752 1.1406 6.49999 1.33179Z" fill="#E23428"/>
                                            <path d="M4.78243 8.91039C4.63993 8.91039 4.49368 8.85339 4.38493 8.74319C4.16368 8.51899 4.16368 8.15799 4.38493 7.93759L7.81993 4.45679C8.04118 4.23259 8.39743 4.23259 8.61493 4.45679C8.83618 4.68099 8.83618 5.04199 8.61493 5.26239L5.17993 8.74319C5.07118 8.85339 4.92493 8.91039 4.78243 8.91039Z" fill="#E23428"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    })
                }
                <div className="swiper-button-prev btnnextswiperReview"><img src={next} width={24} height={"100%"} alt="Next Element" /></div>
                <div className="swiper-button-next btnnextswiperReview"><img src={back} width={24} height={"100%"} alt="Back Element" /></div>
            </Swiper>
        </ReviewCustomers>
    </>
    }else{
        return <>
            <h1>Loading...</h1>
        </>
    }
}