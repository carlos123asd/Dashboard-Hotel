import styled from 'styled-components'

export const TrMainTable = styled.tr`
        font-size: 1rem;
        font-family: 'poppinsregular';
        color: #212121;
        line-height: 25px;
        & .numtit{
            font-size: .875rem;
            font-family: 'poppinsregular';
            color: #799283;
            line-height: 21px;
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
        }
        & .statusbooked{
            background-color: #E23428;
        }

        & .statusinprogress{
            background-color: #FF9C3A;
        }

        & .nightroom{
            font-size: .88rem;
            line-height: 21px;
            color: #799283;
        }
        & td:nth-child(5){
            font-family: 'poppinssemibold';
        }
        & th{
            height: 4.063em;
            font-size: 1.13rem;
            line-height: 27px;
            color: #393939;
            font-family: 'poppinssemibold';
            text-align: center;
            border-bottom: 1px solid #fefefe;
        }
        & th:nth-last-child(-n+1){
            width: 3em;
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
`

export const TableObj = styled.table`
    width: max-content;
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
        width: 24.375em;
        text-align: left;
    }
    & tr th:nth-child(2){
        width: 24.375em;
    }
    & tr th:nth-child(4){
        width: 15.563em;
    }
`

export const ContentTable = styled.div`
    width: 100%;
    overflow: scroll;
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