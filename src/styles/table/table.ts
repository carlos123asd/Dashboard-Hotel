import styled from 'styled-components'

export const TrMainTable = styled.tr`
        font-size: 1rem;
        font-family: 'poppinsregular';
        color: #212121;
        line-height: 25px;
        border-bottom: 2px solid #ececec;
       /* & th[type="room"]:nth-last-child(n+4){
            border: 1px solid red;
            width: 6em;
        }*/
        &:nth-child(n+2){
            height: 150px;
        }
        & .inputEditBookingGuest{
            border-radius: 1em;
            padding: 1em;
            font-family: 'poppinsmedium';
            outline: none;
            border: 1px solid #393939;
        }
        & .inputDataEditBooking{
            width: 6em;
            align-self: center;
        }
        & .mediumletter{
            font-family: 'poppinsmedium';
        }
        & .priceRoom{
            color: #212121;
            font-family: 'poppinssemibold';
        }
        & .timeinbooking{
            font-size: 0.88rem;
        }
        & .namebooking{
            font-family: 'poppinsmedium';
            line-height: 25px;
            color: #393939;
        }
        & .nameemployee{
            font-family: 'poppinsmedium';
            color: #212121;
        }
        & .descriptionemployee{
            line-height: 25px;
            color: #393939;
        }
        & .contactemployee{
            font-family: 'poppinssemibold';
            & img{
                vertical-align: text-bottom;
            }
        }
        & .statusemployee{
            text-transform: uppercase;
            font-family: 'poppinssemibold';
            &--active{
                color: #5AD07A;
            }
            &--inactive{
                color: #E23428;
            }
        }
        & .textareainputroomeditable{
            width: 90%;
            height: 7em;
            resize: none;
            padding: 1em;
            outline: none;
            font-family: 'poppinsmedium';
            border: 1px solid #393939;
            border-radius: 1em;
        }
        & .inputSelect{
            border-radius: 1em;
            border: none;
            &--statusemployee{
                padding: .5em;
                background-color: #135846;
                color: #fff;
                font-family: 'poppinsmedium';
                font-size: 1rem;
                line-height: 25px;
                outline: none;
            }
            &--statusAvaible{
                width: 70%;
                border: none;
                outline: none;
                font-family: 'poppinsmedium';
                background-color: #5AD07A;
                color: #fff;
                font-size: 1rem;
                line-height: 25px;
            }
            &--statusBooked{
                width: 80%;
                border: none;
                outline: none;
                font-family: 'poppinsmedium';
                color: #fff;
                background-color: #E23428;
                font-size: 1rem;
                line-height: 25px;
            }
        }
        & .inputText{
            display: inline-block;
            text-align: center;
            width: 4em;
            border-radius: 1em;
            padding: .3em;
            outline: none;
            border: 1px solid black;
            &--size{
                width: 7em;
            }
        }
        & .editdelete{
            display: inline-block;
            cursor: pointer;
            &:hover{
                scale: 1.1;
            }
        }
        & .editdelete:nth-child(1){
                margin-right: 1em;
            }
        & .controlsmessage{
            font-family: 'poppinsmedium';
            font-size: 1rem;
            line-height: 25px;
            color: #5AD07A;
            margin-right: .6em;
            &--cursor{
                cursor: pointer;
            }
            &:hover{
               border-bottom: 1px solid #5AD07A;
            }
            &--borderbottomred:hover{
                border-bottom: 1px solid #E23428;
            }
            &--bordernone{
                border: none !important;
            }
        }
        & img[alt="Unpublish"],img[alt="Unarchive"]{
            transition: scale .6s;
            cursor: pointer;
            &:hover{
                scale: 1.2;
            }
        }
        & .controlsmessage:nth-child(2){
            color: #E23428;
            margin-left: 2.563em;
            &:hover{
               border-bottom: 1px solid #E23428;
            }
        }
        & .filtercolumn{
            width: 14px;
            height: 14px;
            display: inline-block;
            border-right: 2px solid black;
            transform: rotate(45deg);
            vertical-align: text-top;
            border-bottom: 2px solid black;
            margin-left: .6em;
            cursor: pointer;
        }
        & .numtit{
            font-size: .875rem;
            font-family: 'poppinsregular';
            color: #799283;
            line-height: 21px;
            & img{
                display: inline-block;
                margin-left: .6em;
                cursor: pointer;
                transition: scale .6s;
                &:hover{
                    scale: 1.1;
                }
            }
            &--black{
                color: black;
            }
        }
        & .deluxenum{
            color: #393939;
        }

        & .status{
            width: 7.687999em;
            height: 2.838em;
            background-color: #5AD07A;
            color: #fff;
            font-size: 1rem;
            font-family: 'poppinsmedium';
            line-height: 25px;
            text-align: center;
            border-radius: 0.75em;
            padding: 0.7em 0;
            outline: none;
        }
        & .statusbooked{
            background-color: #E23428;
            outline: none;
        }

        & .statusinprogress{
            background-color: #FF9C3A;
            outline: none;
        }

        & .nightroom{
            font-size: .88rem;
            line-height: 21px;
            color: #799283;
        }
        & td{
            //display: block;
            height: 200px;
            text-align: -webkit-center;
        }
        & td:nth-child(5){
            font-family: 'poppinssemibold';
        }
        & th{
            width: 500px;
            height: 4.063em;
            font-size: 1.13rem;
            line-height: 27px;
            color: #393939;
            font-family: 'poppinssemibold';
            border-bottom: 1px solid #fefefe;
            text-align: center;
        }
        & th:nth-last-child(1){
            width: 0px;
        }
        & .roomnameColumn,.imgroomnameColum{
            display: inline-block
        }
        & .roomnameColumn{
            & span{
                display: block;
                text-align: left;
            }
            & span:nth-child(1){
                margin-bottom: 0.75em;
            }
        }
        & .imgroomnameColum{
            margin-right: 1.75em;
        }
        & td[notes="true"]{
            //height: 3.063em;
            border: 1px solid #799283;
            border-radius: 1rem;
            padding: .5em;
            background: #fff;
            color: #799283;
            cursor: pointer;
            display: block;
            align-content: center;
            &:hover{
                background: #fff;
                color: #5AD07A;
                border: 1px solid #5AD07A;
                scale: 1.1;
            }
        }
`

export const TableObj = styled.table`
    width: 100%;
    text-align: center;
    background: #fff;
    border-radius: 1.25em;
    padding: 0 1.875em;
    & .swiper-wrapper{
        flex-direction: column;
    }

    & .TableRoom{
        width: 100%;
    }
    & tr th:nth-child(1){
        width: 20%;
    }
    & tr th:nth-child(2){
       // width: 24.375em;
    }
    & tr th:nth-child(4){
        //width: 15.563em;
        width: 30.563em;
    }
`

export const ContentTable = styled.div`
    width: 100%;
`

export const PaginationTable = styled.div`
    text-align: -webkit-right;
    margin-top: 1em;
    & div:nth-child(1),div:last-child{
        display: inline-block;
        width: 5.688em;
        height: 3.25em;
        background: #FFFFFF;
        border: 1px solid #135846;
        border-radius: 0.75em;
        font-family: 'poppinsregular';
        font-size: 1rem;
        line-height: 25px;
        color: #135846;
        text-align: center;
        align-content: center;
        cursor: pointer;
        &:hover{
            background: #135846;
            color: #fff;
        }
    }
    & .numpaginationtable{
        width: 3.25em;
        height: 3.25em;
        display: inline-block;
        font-family: 'poppinsmedium';
        font-size: 1rem;
        line-height: 25px;
        color: #393939;
        text-align: center;
        align-content: center;
        border-radius: 0.75em;
        margin: 0 .3em;
        cursor: pointer;
        &:hover{
            background: #135846;
            color: #fff;
        }
    }
`