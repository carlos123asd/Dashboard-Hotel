import styled from 'styled-components'

export const KpiDashboard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 2.375em;
    margin-bottom: 2.5em;
    & .kpicontent{
        width: 20.875em;
        height: 100%;
        box-shadow: 0px 4px 4px #00000005;
        padding: 1.875em;
        background-color: #fff;
        display: flex;
        &--purple{
            background-color: #8F5CCB
        }
        &--greenv2{
            background-color: #02A18A
        }
        &--green{
            background-color: #66D255
        }
        &--yellow{
            background-color: #FFBC3B
        }
        &__img{ 
            width: 60px;
            height: 100%;
            border-radius: .5em;
            text-align: center;
            align-content: center;
            //background-color: #8F5CCB;
            padding: 20px 0;
            margin-right: 1.375em;
            vertical-align: text-bottom;
            & svg{
                margin: 0 auto;
            }
            &__deg{
                transform: rotate(180deg);
            }
        }

        &__values{
            &__tit{
                display: block;
                font-family: 'poppinssemibold';
                font-size: 1.88rem;
                line-height: 46px;
                color: #393939;
            }
            &__sub{
                width: max-content;
                display: block;
                font-family: 'poppinslight';
                font-size: .88rem;
                line-height: 21px;
                color: #787878;
            }
        }

        &:hover{
            box-shadow: 0px 16px 30px #00000014;
        }
        &:hover .kpicontent__img svg path{
            fill: #fff;
        }
        &:hover .kpicontent__img{
            background-color: #E23428;
        }
    }

    @media only screen and (min-width: 1581px){
            & {
                justify-content: space-between;
            }
    }
`