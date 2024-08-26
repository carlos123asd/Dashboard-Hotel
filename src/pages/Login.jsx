import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'
import {LoginImg,LoginTit,LoginSub,LoginLabel,LoginContentInline,LoginInput,LoginForm,LoginBtn,LoginContentMain} from '../styles/login/login'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useContextAuth } from '../features/context/AuthContext';
import { useEffect, useState } from 'react';
import { dbThunkUser } from '../features/db/login/loginThunk';
import { useDispatch } from 'react-redux';

export default function Login(){
    sessionStorage.setItem('auth',true);
    const navigate = useNavigate(); 
    const {dispatch} = useContextAuth()
    const [email,setEmail] = useState("")
    const [users,setUsers] = useState({})
    const dispatchdb = useDispatch()

    useEffect(() => {
        dispatchdb(dbThunkUser()).then(response => setUsers(response.payload.users))
    },[])

    const validateAuth = (event) => {
        event.preventDefault();
        if(sessionStorage.getItem('auth') === 'true' && email !== ''){
           const userFound = users.filter((user) => {
                return user.email === email
           })
           if(userFound.length !== 0){
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        name: userFound[0].name,
                        email: userFound[0].email
                    }
                })
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
            }else{
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
            }
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
                    <LoginInput onChange={(e) => setEmail(e.target.value)} id='username' type="text" placeholder='Enter username' />
                </LoginContentInline>
                <LoginContentInline>
                    <LoginLabel htmlFor="password">Password:</LoginLabel>
                    <LoginInput id='password' type="password" placeholder='Enter password' />
                </LoginContentInline>
                <LoginBtn type='submit' value="Log In" />
            </LoginForm>
        </LoginContentMain>
    </>
}