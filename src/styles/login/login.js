import styled from 'styled-components'

export const LoginImg = styled.img`
    margin: 0 auto;
    display: block;
`
export const LoginTit = styled.h1`
    font-family: 'vietnamBold';
    font-size: 2.25rem;
    line-height: 35px;
    color: white;
    filter: drop-shadow(0px 0px 5px #135846);
    text-align: center;
    margin-bottom: .3em;
`
export const LoginSub = styled.h2`
   font-family: 'vietnamBold';
    font-size: 1rem;
    line-height: 24px;
    color: #135846;
    text-align: center;
`

export const LoginLabel = styled.label`
        font-family: 'vietnamMedium';
        font-size: 1rem;
        line-height: 24px;
        color: black;
        display: block;
        margin-bottom: .5em;
    `
export const LoginInput = styled.input`
    display: block;
    border-radius: 0.75em;
    width: 28em;
    height: 3.5em;
    border: 1px solid #E5E3D1;
    padding: 0.938em;
    outline: none;
    font-family: 'vietnamRegular';
    font-size: 1rem;
    line-height: 24px;
    color: #948A4F;
    background: #FAFAF7;
    margin: 0 auto;
`
export const LoginContentInline = styled.div`
    margin-bottom: 1em;
`
export const LoginForm = styled.form`
    margin: 0 auto;
    margin-top: 1em;
    width: 30em;
`

export const LoginBtn = styled.input`
    color: white;
    width: 100%;
    height: 2.5em;
    background: #BEAD8E;
    border: 0px;
    cursor: pointer;
    border-radius: 0.625em;
`
export const LoginContentMain = styled.div`
    position: absolute;
    left: calc(100vw - 50% - 14.5em);
    top: calc(100vh - 50% - 17.5em);
`