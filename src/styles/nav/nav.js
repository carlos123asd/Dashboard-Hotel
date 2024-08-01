import styled from "styled-components";

export const ContentNavMain = styled.div`
    width: 100%;
    height: 7.5em;
    box-shadow: 0px 3px 10px #00000005;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-duration: 3s;
    animation-name: slidein;
    padding-left: 25%;
`

export const ContentNavImg = styled.div`
    display: inline-block;
    margin-right: 3em;
`

export const ContentNavTit = styled.span`
    font-family: 'poppinssemibold';
    font-size: 1.75rem;
    line-height: 42px;
    margin-left: 1.3em;
    color: #262626;
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
    background: #fff;
`

export const SubTitLogoNavVertical = styled.span`
    font-family: 'poppinslight';
    font-size: 0.75em;
    color: #5D5449;
    line-height: 18px;
    display: block;
`

export const TitLogoNavVertical = styled.span`
    font-family: 'poppinssemibold';
    font-size: 2.5em;
    color: black;
    line-height: 23.18px;
    display: block;
    margin-bottom: 0.386em;
`

export const ContentHeaderNavVertical = styled.div`
    display: flex;
    padding: 3.053em 1.5em;
    justify-content: center;
    align-items: center;
`

export const ImagenHeaderNavVertical = styled.img`
    margin-right: 1em;
`
export const ListHeaderNavVertical = styled.li`
    font-family: 'poppinsregular';
    font-size: 1.13rem;
    display: block;
    height: 4.188em;
    margin-bottom: 0.938em;
    list-style: none;
    font-weight: 400;
    cursor: pointer;
    color: #799283;
    align-content: center;
    padding-left: 3.938em;
    display: flex;
    align-items: center;
    &:hover{
        border-left: 8px solid #E23428;
        border-top-right-radius: 0.375em;
        border-bottom-right-radius: 0.375em;
        color: #E23428;
        font-weight: 600;
    }
    &:hover select{
        color: #E23428;
        font-weight: 600;
    }
    & svg{
        margin-right: 1.688em;
    }
    & svg path{
        fill: #799283;
    }
    &:hover svg path{
        fill: #E23428;
    }
`
export const UnListContentHeaderNavVertical = styled.ul`
    padding-left: 0;
    display: block;
    align-content: center;
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
    width: 70px;
    height: 70px;
    border-radius: .5em;
    margin: 0 auto;
    margin-bottom: 0.938em;
    overflow: hidden;
    & img{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`
export const ContentContactNavVertical = styled.div`
    width: 14.563em;
    padding: 1.5em 2.813em;
    box-shadow: 0px 20px 30px #00000014;
    text-align: center;
    margin: 0 auto;
    margin-top: 2.563em;
    & span{
        display: block;
        margin-bottom: 0.563em;
    }
    & .titprofile{
        width: max-content;
        font-family: 'poppinsmedium';
        font-size: 1rem;
    }
    & .subtitprofile{
        font-family: 'poppinslight';
        font-size: 0.75rem;
        color: #B2B2B2;
    }
    & .btnContactUs{
        font-family: 'poppinssemibold';
        width: 9.875em;
        height: 2.938em;
        background-color: #EBF1EF;
        color: #135846;
        text-align: center;
        padding: 0.875em 0;
        margin: 0 auto;
        margin-top: 1em;
        border-radius: 0.5em;
    }
`
export const ContentPageMain = styled.div`
    padding-left: calc(25% + 3.125em);
    animation-duration: 3s;
    animation-name: slidecontent;
`
export const ContentCopyNavVertical = styled.div`
    text-align: center;
    margin-top: 3.875em;
    & .titcopy{
        display: block;
        font-family: 'poppinssemibold';
        font-size: 1rem;
        margin-bottom: .313em;
    }
    & .subtitcopy,.madecopy{
        display: block;
        font-family: 'poppinslight';
        font-size: .88rem;
        margin-bottom: 4.188em;
    }
`