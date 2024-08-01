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

        & .nightroom{
            font-size: .88rem;
            line-height: 21px;
            color: #799283;
        }
        & td:nth-child(5){
            font-family: 'poppinssemibold';
        }
        & th{
            font-size: 1.13rem;
            line-height: 27px;
            color: #393939;
            font-family: 'poppinssemibold';
        }
`