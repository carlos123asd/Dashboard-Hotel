import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.svg'
import {LoginImg,LoginTit,LoginSub,LoginLabel,LoginContentInline,LoginInput,LoginForm,LoginBtn,LoginContentMain} from '../styles/login/login'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function Login(){
    sessionStorage.setItem('auth',true);
    const navigate = useNavigate(); 

    const validateAuth = (event) => {
        event.preventDefault();
        if(sessionStorage.getItem('auth')){
            Toastify({
                text: "Correcto, Bienvenido!!",
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
        }
        else{
        Toastify({
            text: "Usuario no Valido",
            duration: 3000,
            gravity: 'top',
            position: 'center',
            style:{
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
                    <LoginInput id='username' type="text" placeholder='Enter username' />
                </LoginContentInline>
                <LoginContentInline>
                    <LoginLabel htmlFor="password">Password:</LoginLabel>
                    <LoginInput id='password' type="text" placeholder='Enter password' />
                </LoginContentInline>
                <LoginBtn type='submit' value="Log In" />
            </LoginForm>
        </LoginContentMain>
    </>
}