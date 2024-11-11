import styled from "styled-components";

const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #135846;
    gap: 3rem;
    & img{
        animation: scaleicon 2s infinite;
    }
` 
export default Loading;