import styled from "styled-components";

export const ModalNewNotes = styled.div`
    width: 70%;
    height: 30%;
    background: #fff;
    margin: 0 auto;
    overflow: scroll;
    padding: 1em;
    border-radius: 1rem;
    background: #f8f8f8;
    outline: none;
    overflow: auto;
    align-content: center;
    & .contentRoomNewRoom{
        h2{
            text-align: center;
        }
    }
    & .textareainputbookingeditable{
        width: 100%;
        height: 10em;
        resize: none;
        padding: 1em;
        overflow-y: auto;
        display: block;
        border-radius: 1rem;
        font-family: "poppinssemibold";
    }
`