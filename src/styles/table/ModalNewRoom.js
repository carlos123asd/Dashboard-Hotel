import styled from "styled-components";

export const ModalNewRoom = styled.div`
    width: 80%;
    height: 90%;
    background: #fff;
    margin: 0 auto;
    overflow: scroll;
    padding: 1em;
    border-radius: 1rem;
    background: #f8f8f8;
    outline: none;
    & h1{
        font-family: 'poppinssemibold';
        line-height: 30px;
        margin-bottom: 1em;
    }
    & h2{
        font-family: 'poppinssemibold';
        font-size: 1.2rem;
        line-height: 30px;
        color: black;
        margin: .5em 0;
    }
    & label{
        font-family: 'poppinsmedium';
        font-size: .88rem;
        line-height: 18px;
        color: #5e5e5e;
        display: block;
        margin-bottom: .5em;
    }
    & select{
        background: #135846;
        border-radius: 1em;
        font-family: 'poppinslight';
        color: #fff;
        outline: none;
        padding: .3em;
        cursor: pointer;
    }
    & input[type="text"]{
        width: 5em;
        border: none;
        border-bottom: 1px solid #135846;
        outline: none;
        padding: 0 .5em;
        padding-bottom: 0;
        font-family: 'poppinslight';
        color: black;
        text-align: center;
        background: #f8f8f8;
    }
    & textarea{
        width: 100%;
        height: 12em;
        border-radius: 1.25em;
        border: none;
        resize: none;
        font-family: 'poppinslight';
        color: black;
        padding: 1em;
        padding-top: 1.5em;
        outline: none;
        box-shadow: 0px 16px 30px #00000014;
    }
    & input[type="checkbox"]{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    & ul{
        list-style: none;
        font-family: 'poppinslight';
        color: black;
        font-size: 1rem;
        & div{
            display: inline-block;
        }
        & div:nth-child(1){
            margin-right: 5em;
        }
        & li{
            margin-bottom: .8em;
            & input[type="checkbox"]{
                margin-right: 1em;
            }
        }
    }
   
    & .contentRoomNewRoom{
        width: 100%;
        position: relative;
        &__firstblock{
            display: inline-block;
        }
        &__firstblock:nth-child(1){
            margin-right: 5em;
        }
        & form{
            width: 65%;
            display: inline-block;
        }
        &__priceblock,&__pricesecondblock{
            display: inline-block;
        }
        &__pricesecondblock{
            display: none;
            position: relative;
            & div{
                position: absolute;
                font-family: 'poppinslight';
                font-size: .88rem;
                line-height: 16px;
                color: #135846;
            }
        }
        &__priceblock{
            margin-right: 1em;
            & div{
                display: inline-block;
                & input:nth-child(1){
                    margin-right: .2em;
                }
            }
            & div:nth-child(2){
                margin-right: 1em;
            }
        }
        &__pricethreeblock{
            display: inline-block;
            margin-left: 3em;
            position: relative;
            vertical-align: top;
            margin-bottom: 2.5em;
            & div{
                position: absolute;
                font-family: 'poppinslight';
                font-size: .88rem;
                line-height: 16px;
                color: #135846;
            }
        }
        & .contentRoomInfo{
            display: inline-block;
            width: max-content;
            height: 20em;
            position: fixed;
            border-radius: 1.25em;
            left: calc(100% - 35% + 2em);
            padding: 1em;
            box-shadow: 0px 16px 30px #00000014;
            background: #fff;
            & img{
                width: 100px;
                height: 120px;
                border-radius: .5em;
                margin-right: 1em;
            }
            &__num{
                font-family: 'poppinslight';
                font-size: .88rem;
                line-height: 16px;
                color: #5e5e5e;
                display: block;
                margin-bottom: 1em;
            }
            &__num:nth-last-child(-n+1){
                font-family: 'poppinslight';
                font-size: 1rem;
                line-height: 16px;
                color: black;
                font-weight: 600;
            }
        }
    }
    & input[id="uriphoto1"],input[id="uriphoto2"],input[id="uriphoto3"]{
        width: 100%;
    }
    & input[type="submit"]{
        border: none;
        width: 13.313em;
        height: 3.063em;
        font-size: 1rem;
        font-family: 'poppinsmedium';
        line-height: 25px;
        text-align: center;
        color: #fff;
        background: #135846;
        align-content: center;
        border-radius: .75em;
        cursor: pointer;
        margin-top: 2em;
        &:hover{
        scale: 1.05;
        }
    }
`