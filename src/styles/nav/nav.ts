import styled from "styled-components";

export const ContentNavMain = styled.div`
    width: 100%;
    height: 10em;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.46);
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-duration: 3s;
    animation-name: slidein;
    grid-column: 1 / 3;
    grid-row: 1;
    background-color: #05372C;
    & .pos-relative{
        position: relative;
    }
    & .titpath{
        display: flex;
        align-items: center;
        & img{
            cursor: pointer;
            width: 40px;
            height: 40px;
        }
    }
`

export const ContentNavImg = styled.div`
    display: inline-block;
    margin-right: 3em;
    cursor: pointer;
    position: relative;
    & img:nth-child(1){
        height: 45px;
    }
    & .contennotification{
        &__num{
            width: 30px;
            height: 30px;
            background-color: #E23428;
            color: #fff;
            font-size: .88rem;
            font-family: 'poppinssemibold';
            padding: 0.38rem;
            border-radius: 8px;
            position: absolute;
            top: -1em;
            right: -1em;
            text-align: center;
        }
    }
`

export const ContentNavTit = styled.span`
    font-family: 'DM_Sans9T';
    font-size: 2rem;
    line-height: 42px;
    margin-left: 1.3em;
    color: #fff;
`

export const ContentNavVertical = styled.div`
    width: 25%;
    box-shadow: 13px 3px 40px #00000005;
    position: absolute;
    animation-duration: 3s;
    animation-name: slideout;
    position: absolute;
    left: 0%;
    top: 0;
    background: #05372C;
    grid-column: 1;
    grid-row: 1 / auto;
    padding-bottom: 6em;
    border-bottom: none;
`

export const SubTitLogoNavVertical = styled.span`
    font-family: 'poppinslight';
    font-size: 0.75em;
    color: #5D5449;
    line-height: 18px;
    display: block;
`

export const TitLogoNavVertical = styled.span`
    font-family: 'DM_Sans9T';
    font-size: 2.5rem;
    color: white;
    display: block;
`

export const ContentHeaderNavVertical = styled.div`
    height: 10em;
    display: flex;
    gap: 3em;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
    & svg{
        width: 50px;
        height: 50px;
        margin-left: 2em;
        margin-right: 1em;
        transition: scale ease-in-out .1s;
        &:hover{
            cursor: pointer;
            scale: 1.05;
        }
    }
`

export const ImagenHeaderNavVertical = styled.img`
    width: 105px;
    height: 105px;
    margin-left: 2em;
`
export const ListHeaderNavVertical = styled.div`
    width: max-content;
    font-family: 'monserrat';
    font-size: 1.5rem;
    height: 4.188em;
    margin-bottom: 0.938em;
    list-style: none;
    font-weight: 400;
    cursor: pointer;
    color: #fff;
    align-content: center;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    transition: scale ease-in-out .1s;
    & span{
        width: 9em;
    }
    &:hover{
        scale: 1.1;
        background-color: #02A18A;
        border-radius: 11px;
    }
    & svg:nth-child(1){
        margin-right: 1.688em;
    }
    & svg:nth-child(2){
        margin-left: 2em;
    }
    &:hover svg path{
        fill: #fff;
    }
`
export const UnListContentHeaderNavVertical = styled.div`
    width: max-content;
    margin: 0 auto;
    padding-left: 0;
    display: block;
    align-content: center;
    margin-top: 5em;
    & h2{
        font-family: 'DM_Sans_extralight';
        font-size: 2rem;
        color: #fff;
        margin-bottom: 1.5em;
    }
`
export const SelectListHeaderNavVertical = styled.select`
    width: 9.938em;
    height: 27px;
    font-family: 'poppinsregular';
    font-size: 1.13rem;
    color: #799283;
    border: none;
    outline: none;
`
export const ImageProfileHeaderNavVertical = styled.div`
    border-radius: .5em;
    overflow: hidden;
    position: absolute;
    top: -25%;
    width: 100%;
    text-align: -webkit-center;
    & img{
        width: 120px;
        height: 120px;
        display: block;
        background: red;
        border-radius: .5em;
        object-fit: cover;
    }
`
export const ContentContactNavVertical = styled.div`
    position: relative;
    width: 50%;
    height: 15em;
    box-shadow: 0px 20px 30px #00000014;
    text-align: center;
    margin: 0 auto;
    margin-top: 12em;
    background-color: #F0F7F6;
    border-radius: 1em;
    align-content: center;
    & span{
        display: block;
        margin-bottom: 0.563em;
    }
    & .titprofile{
        width: max-content;
        font-family: 'monserrat';
        font-size: 1.3rem;
        margin: 0 auto;
        margin-top: 2.5em;
    }
    & .subtitprofile{
        font-family: 'monserrat_semibold';
        font-size: .8rem;
        color: #B2B2B2;
        margin-top: 1em;
    }
    & .btnContactUs{
        font-family: 'monserrat_semibold';
        width: 9.875em;
        background-color: #02A18A;
        color: #fff;
        text-align: center;
        padding: 0.875em 0;
        margin: 0 auto;
        margin-top: 1.3em;
        border-radius: 0.5em;
        box-shadow: 0px 4px 4px #135846;
        cursor: pointer;
        transition: scale ease-in-out .1s;
        &:hover{
            scale: 1.1;
        } 
    }
`
export const ContentPageMain = styled.div`
    padding: 3.125em;
    animation-duration: 3s;
    animation-name: slidecontent;
    background: #F0F7F6;
    grid-column: 2;
    grid-row: 2/auto;

    & .kpicontent__img{
        box-shadow: 0px 4px 4px #00000005;
        padding: 1.875em;
        border-radius: 1rem;
        margin-right: .5rem;
    }

    .kpicontent--purple{
        background-color: #8F5CCB
    }

    .kpicontent--greenv2{
        background-color: #02A18A
    }

    .kpicontent--green{
        background-color: #66D255
    }

    .kpicontent--yellow{
        background-color: #FFBC3B
    }

    & .parent{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 20px;

        & .div1 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(1, 1fr);
            gap: 8px;
            grid-column: span 4 / span 4;
        }

        & .div2 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(1, 1fr);
            gap: 8px;
            grid-column: span 4 / span 4;
            grid-row-start: 2;
        }

        & .div3 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(1, 1fr);
            gap: 8px;
            grid-column: span 4 / span 4;
            grid-row-start: 3;
        }

        & .div4 {
            grid-column: span 4 / span 4;
            grid-row-start: 4;
        }
        & .div5 {
            grid-column: span 4 / span 4;
            grid-row-start: 5;
        }
        & .div7 {
            grid-column: span 2 / span 2;
            grid-column-start: 3;
        }
        & .div6 { 
            grid-column: span 3 / span 3;
        }
        & .div8{
            grid-column: span 2 / span 2;
        }
    }

    & div[contentflex="true"]{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
`
export const ContentCopyNavVertical = styled.div`
    text-align: center;
    margin-top: 3.875em;
    & .titcopy{
        display: block;
        font-family: 'monserrat_semibold';
        font-size: 1rem;
        margin-bottom: .313em;
        color: #fff;
    }
    & .subtitcopy,.madecopy{
        display: block;
        font-family: 'monserrat_extralight';
        font-size: .88rem;
        margin-bottom: 4.188em;
        color: #fff;
    }
`