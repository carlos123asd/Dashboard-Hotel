
import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'
import {LoginImg,LoginTit,LoginSub,LoginLabel,LoginContentInline,LoginInput,LoginForm,LoginBtn,LoginContentMain} from '../styles/login/login'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useContextAuth } from '../features/context/AuthContext';
import { FormEventHandler, useState } from 'react';
import { dbThunkUser } from '../features/db/login/loginThunk';
import { appDispatch } from '../features/hooks/hooks';


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
                            _id: response.payload._id,
                            username: response.payload.username,
                            email: response.payload.email,
                            photo: response.payload.photo
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
            <div>
                <LoginImg src={logo} alt="Logo Dashboard" />
            </div>
            <LoginTit>Welcome to Hotel Miranda</LoginTit>
            <LoginSub>Experience the finest luxury and service</LoginSub>
            <LoginForm onSubmit={validateAuth} action="">
                <LoginContentInline>
                    <LoginLabel htmlFor="username">Username:</LoginLabel>
                    <LoginInput onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id='username' type="text" placeholder='Enter username' />
                </LoginContentInline>
                <LoginContentInline>
                    <LoginLabel htmlFor="password">Password:</LoginLabel>
                    <LoginInput onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id='password' type="password" placeholder='Enter password' />
                </LoginContentInline>
                <LoginBtn id='login' type='submit' value="Log In" />
            </LoginForm>
        </LoginContentMain>
    </>
}