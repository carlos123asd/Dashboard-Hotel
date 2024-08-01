import styled from 'styled-components'
export const ReviewCustomers = styled.div`
    padding: 1.875em;
    background: #fff;
    width: 100%;
    height: 27.063em;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 1.25em;
    position: relative;
    margin-top: 2em;

    & .btnnextswiperReview{
        width: 56px;
        height: 56px;
        background-color: #135846;
        border-radius: .75em;
        color: rgba(0,0,0,0);
        display: block !important;
        & img{
            display: block !important;
            margin: 0 auto;
        }
    }

    & .btnnextswiperReview:nth-child(2){
        transform: rotate(180deg);
    }

    & h2{
        font-family: 'poppinsmedium';
        font-size: 1.25rem;
        line-height: 30px;
        color: #393939;
        margin-bottom: 1.875em;
    }
    & .ReviewCustomersContent{
        &__review{
            width: 26.938em;
            height: 100%;
            padding: 1.875em;
            border: 1px solid #EBEBEB;
            border-radius: 1.25em;
            background-color: #fff;
            &:hover{
                box-shadow: 0px 16px 30px #00000014;
            }
            & p{
                display: block;
                font-family: 'poppinsregular';
                font-size: 1rem;
                text-align: left;
                line-height: 28px;
                margin-bottom: 3.25em;
                color: #4E4E4E;
            }
            
            &__contentinfo{
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                &__img{
                    display: inline-block;
                    width: 56px;
                    height: 56px;
                    border-radius: .5em;
                    overflow: hidden;
                    margin-right: 1.313em;
                }
                &__tits{
                    display: inline-block;
                    &__tit{
                        display: block;
                        font-family: 'poppinssemibold';
                        font-size: 1rem;
                        line-height: 25px;
                        color: #262626;
                        text-align: left;
                        margin-bottom: .125em;
                    }
                    &__sub{
                        display: block;
                        font-size: .875em;
                        font-family: 'poppinsregular';
                        line-height: 21px;
                        text-align: left;
                        color: #799283;
                    }
                }
                &__state{
                    & svg[height="22"]{
                        margin-right: 1em;
                    }
                }
            }
        }
    }
`

