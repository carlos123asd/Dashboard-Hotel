import styled from "styled-components";

export const ModalNewRoom = styled.div`
    width: 80%;
    height: 90%;
    background: #fff;
    margin: 0 auto;
    overflow: scroll;
    padding: 1em;
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
    }
    & textarea{
        width: 100%;
        height: 12em;
        border: 2px solid #5e5e5e;
        resize: none;
        font-family: 'poppinslight';
        color: black;
        padding: .5em;
        border-radius: .88em;
        outline: none;
    }
    & input[type="checkbox"]{
        width: 20px;
        height: 20px;
    }
    & ul{
        list-style: none;
        font-family: 'poppinslight';
        color: black;
        font-size: 1rem;
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
        & .contentRoomInfo{
            display: inline-block;
            width: max-content;
            height: 20em;
            box-shadow: 13px 3px 40px #00000005;
            border: 1px solid #5e5e5e;
            position: fixed;
            border-radius: 1em;
            left: calc(100% - 35% + 2em);
            padding: 1em;
            & img{
                width: 100px;
                height: 120px;
                border-radius: .5em;
                border: 1px solid red;
                margin-right: 1em;
            }
            &__num{
                font-family: 'poppinslight';
                font-size: .88rem;
                line-height: 16px;
                color: #5e5e5e;
                display: block;
            }
            &__num:nth-last-child(-n+1){
                font-family: 'poppinslight';
                font-size: 1rem;
                line-height: 16px;
                color: black;
            }
        }
    }
`