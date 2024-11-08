import styled from 'styled-components'

export const LoginImg = styled.img`
    display: block;
`
export const LoginTit = styled.h1`
    font-family: 'nunito_bold';
    font-size: 2.25rem;
    line-height: 35px;
    color: black;
    margin-bottom: .3em;
`
export const LoginSub = styled.h2`
   font-family: 'nunito_semibold';
    font-size: 1.50rem;
    line-height: 24px;
    color: #A0A7A4;
`

export const LoginLabel = styled.label`
        font-family: 'nunito_semibold';
        font-size: 1.50rem;
        color: black;
        display: block;
        margin-bottom: .5em;
    `
export const LoginInput = styled.input`
    display: block;
    border-radius: 0.75em;
    width: 100%;
    height: 4.188em;
    border: 2px solid #E5EEEA;
    padding: 0.938em;
    outline: none;
    font-family: 'nunito';
    font-size: 1rem;
    color: black;
    margin: 0 auto;
    &:focus{
        border: 2px solid #247B53;
    }
`
export const LoginContentInline = styled.div`
    &:nth-child(2){
        margin-top: 3em;
    }
    margin-bottom: 1em;
    & a{
        font-family: 'nunito_semibold';
        font-size: 1.50rem;
        line-height: 24px;
        color: black;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    & .labelPass{
        display: flex;
        justify-content: space-between;
    }
`
export const LoginForm = styled.form`
    margin: 0 auto;
    margin-top: 1em;
`

export const LoginBtn = styled.input`
    color: white;
    font-family: 'nunito_semibold';
    font-size: 1.50rem;
    width: 100%;
    height: 3em;
    background: linear-gradient(0deg, #081D13 0%, #236D4E 100%);
    border: 0px;
    cursor: pointer;
    border-radius: 0.625em;
    margin-top: 1.5em;
    &:hover{
        scale: 1.02;
        box-shadow: 5px 5px 4.5px rgba(0, 0, 0, 0.25);
        transition: scale ease-in-out .20s;
    }
`
export const LoginContentMain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    & .formleft{
        width: 50%;
        padding: 2rem 10%;
        & .hr{
            height: 2px;
            background-color: #A0A7A4;
            filter: blur(4px);
            margin: 4em 0;
        }
    }
    & .swiperlogin{
        & h2{
            position: absolute;
            z-index: 1000;
            top: 5%;
            left: 5%;
            font-family: 'merriweather_lightItalic';
            font-size: 4rem;
            color: #fff;
            text-shadow: 
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black;
        }
        & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        & .messageslider{
            position: absolute;
            width: 100%;
            height: max-content;
            text-align: center;
            bottom: 8%;
            left: 0;
            z-index: 1000;
            color: #fff;
            font-family: 'merriweather';
            font-size: 1.8rem;
            text-shadow: 
                -1px -1px 0 black,
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black;
        }
        & span{
            width: 3.75rem;
            height: 8px;
            border-radius: 9999px;
        }
        & .swiper-pagination-bullet-active{
            background: #fff;
        }
        & .swiper-button-prev,.swiper-button-next{  
            color: #fff;
        }
    }
`