import styled from "styled-components";

export const BookingView = styled.div`
    padding: 2.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    & .infobooking{
        display: inline-block;
        & div:nth-child(2){
            display: inline-block;
            vertical-align: top;
            & span:nth-child(1){
                display: block;
                color: #212121;
                font-size: 1.88rem;
                font-family: 'poppinssemibold';
                line-height: 46px;
            }
            & span:nth-child(2){
                font-family: 'poppinsregular';
                font-size: .88rem;
                color: #799283;
                line-height: 21px;
                margin-bottom: 2.613em;
            }
            & div{
                margin-top: .613em;
            }
        }
        & .imagenperfil{
            display: inline-block;
            width: 9.75em;
            height: 9.75em;
            background: #C5C5C5;
            border: 4px solid #FFFFFF;
            border-radius: .75em;
            margin-right: 2.438em;
        }
    }
    & .morebooking{
        display: inline-block;
    }
    & .bookingcall{
        display: inline-block;
        margin-right: 2em;
        border: 1px solid #E8F2EF;
        border-radius: .75em;
        vertical-align: middle;
        padding: 1.219em;
        cursor: pointer;
    }
    & .bookingmessage{
        width: 13.063em;
        display: inline-block;
        font-family: 'poppinsmedium';
        font-size: 1rem;
        line-height: 25px;
        text-align: center;
        align-content: center;
        background: #135846;
        color: #fff;
        padding: 1.125em 0;
        padding-left: 2.063em;
        border-radius: 0.75em;
        position: relative;
        cursor: pointer;
        & img{
            position: absolute;
            left: 0;
            margin-left: 1.125em;
        }
    }
    & .checkinout{
        margin-top: 1em;
        & div:nth-child(1),div:nth-child(2){
            display: inline-block;
            & span:nth-child(1){
                color: #6E6E6E;
                font-size: 0.88rem;
                line-height: 21px;
                display: block;
                font-family: 'poppinsregular';
            }
            & span:nth-child(2){
                color: #212121;
                font-size: 1rem;
                font-family: 'poppinsmedium';
            }
        }
        & div:nth-child(1){
            margin-right: 7.813em;
        }
    }
    & .roominfo{
        & div:nth-child(1),div:nth-child(2){
            display: inline-block;
            margin-right: 7.813em;
            & span:nth-child(1){
                color: #6E6E6E;
                font-size: 0.88rem;
                line-height: 21px;
                display: block;
                font-family: 'poppinsregular';
                margin-bottom: 0.625em;
            }
            & span:nth-child(2){
                color: #212121;
                font-size:  1.50rem;
                line-height: 35px;
                font-family: 'poppinsmedium';
                & span{
                    color: #799283;
                    font-size: 0.88rem;
                    line-height: 21px;
                    font-family: 'poppinsregular';
                    display: inline-block;
                }
            }
        }
    }
    & .facilitiesbooking{
        margin-top: 1em;
        & span{
            color: #6E6E6E;
                font-size: 0.88rem;
                line-height: 21px;
                display: block;
                font-family: 'poppinsregular';
                margin-bottom: 0.625em;
        }
        & div{
            display: inline-block;
            width: max-content;
            color: #135846;
            background: #EEF9F2;
            padding: 1.2em;
            text-align: center;
            align-content: center;
            font-family: 'poppinssemibold';
            font-size: 0.88rem;
            border-radius: 0.75em;
            margin-right: 1em;
            margin-bottom: 1em;
            border: 1px solid #135846;
        }
    }
    & p{
        width: 100%;
        font-family: 'poppinsregular';
        font-size: 0.88rem;
        color: #363636;
        line-height: 21px;
        text-align: left;
        margin: 1.875em 0;
    }
    & hr{
        width: 100%;
        margin: 1.5em 0;
    }

    & .imagesbooking{
        width: 100%;
        height: 100%;
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        position: relative;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(to top, transparent, black 20%);
        mask-image: linear-gradient(to top, transparent, black 20%);
        & .imagebookingRight{
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 49.5em;
        }
        & .barbooking{
            width: 15em;
            padding: 1em 0;
            background: #00FE61;
            text-align: center;
            align-content: center;
            color: #fff;
            font-family: 'poppinsregular';
            position: absolute;
            right: -4em;
            top: 1em;
            transform: rotate(40deg);
            z-index: 0;
        }
        & .titroom{
            font-size: 1.50rem;
            font-family: 'poppinsmedium';
            line-height: 35px;
            color: #fff;
        }
        & .descriptionroom{
            font-size:  .88rem;
            font-family: 'poppinsmedium';
            line-height: 21px;
            color: #fff;
        }
        & .contentninfoRoomBooking{
            position: absolute;
            z-index: 1000;
            bottom: 4em;
            padding: 0 3em;
        }
        & .btnnextBooking,.btnbackBooking{
            width: 3em;
            height: 3em;
            border-radius: .88em;
            text-align: center;
            text-align: -webkit-center;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            &:hover{
                border: 1px solid #fff;
            }
        }
        & .btnnextBooking::before{
            content: ' ';
            position: absolute;
            bottom: 0;
            width: 3em;
            height: 3em;
            left: 0;
            background: #C5C5C5;
            opacity: .3;
        }
        & .btnbackBooking::before{
            content: ' ';
            position: absolute;
            bottom: 0;
            width: 3em;
            height: 3em;
            right: 0;
            background: #C5C5C5;
            opacity: .3;
        }


        & .btnbackBooking{
            transform: rotate(180deg);
            margin-left: 3em;
        }
        & .btnnextBooking{
            margin-right: 3em;
        }
        & .contentNavigationBooking{
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 30%;
            z-index: 1000;
        }
    }
`

export default BookingView