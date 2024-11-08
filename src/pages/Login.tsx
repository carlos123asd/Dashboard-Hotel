
import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'
import {LoginImg,LoginTit,LoginSub,LoginLabel,LoginContentInline,LoginInput,LoginForm,LoginBtn,LoginContentMain} from '../styles/login/login'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useContextAuth } from '../features/context/AuthContext';
import { FormEventHandler, useState } from 'react';
import { dbThunkUser } from '../features/db/login/loginThunk';
import { appDispatch } from '../features/hooks/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import imgslider1 from '../assets/imgs/login/img1.jpg';
import imgslider2 from '../assets/imgs/login/img2.jpg';
import imgslider3 from '../assets/imgs/login/img3.jpg';

export default function Login(){
    const navigate = useNavigate(); 
    const {dispatch} = useContextAuth()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatchdb = appDispatch()

    const validateAuth:FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if(email !== "" || password !== ""){
            dispatchdb(dbThunkUser({
                email: email, 
                password: password
            })).then(response => {
                    localStorage.setItem('TOKEN_AUTH', response.payload.token)
                    //Almacenar el objeto usuario directamente
                    dispatch({
                        type: 'LOGIN',
                        payload: {
                            user: response.payload.user,
                        },
                    });
                    Toastify({
                    text: "🏠 Bienvenido!!",
                    duration: 2000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        background: '#135846'
                    }
                    }).showToast();
            
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }).catch((error) => {
                Toastify({
                    text: "❔ User not found!!",
                    duration: 2000,
                    gravity: 'top',
                    position: 'center',
                    style:{
                        fontFamily: 'poppinssemibold',
                        borderRadius: '1em',
                        background: '#E23428'
                    }
                }).showToast();   
                console.error(error)
            }) 
        }
        else{
            Toastify({
                text: "Email and Password necesary",
                duration: 3000,
                gravity: 'top',
                position: 'center',
                style:{
                    fontFamily: 'poppinssemibold',
                    borderRadius: '1em',
                    background: '#E23428'
                }
            }).showToast();
        }
    }

    return <>
        <LoginContentMain>
            <div className="formleft">
                <div>
                    <LoginImg src={logo} alt="Logo Dashboard" />
                </div>
                <LoginTit>Log in</LoginTit>
                <LoginSub>Welcome to Hotel Miranda</LoginSub>
                <div className='hr'></div>
                <LoginForm onSubmit={validateAuth} action="">
                    <LoginContentInline>
                        <LoginLabel htmlFor="username">Email</LoginLabel>
                        <LoginInput onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id='username' type="text" placeholder='Enter username' />
                    </LoginContentInline>
                    <LoginContentInline>
                        <div className='labelPass'>
                            <LoginLabel htmlFor="password">Password</LoginLabel>
                            <a><span>Forgot?</span></a>
                        </div>
                        <LoginInput onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id='password' type="password" placeholder='Enter password' />
                    </LoginContentInline>
                    <LoginBtn id='login' type='submit' value="Log In" />
                </LoginForm>
            </div>
            <Swiper
            style={{width:"50%",height:"100%",borderRadius:'21px'}}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            >
                <h2>Hotel<br/>Miranda</h2>
                <SwiperSlide>
                    <img src={imgslider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgslider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgslider3} alt="" />
                </SwiperSlide>
            </Swiper>
        </LoginContentMain>
    </>
}