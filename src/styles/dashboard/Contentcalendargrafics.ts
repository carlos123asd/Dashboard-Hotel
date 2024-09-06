import styled from "styled-components";

export const Contentcalendargrafics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: max-content;
    gap: 2.438em;
    align-items: center;
    & .fc-h-event,.fc-daygrid-event.fc-event-start { /* needs to be same precedence */
       font-family: 'poppinsmedium';
    }
    & .fc-header-toolbar,.fc-daygrid-more-link,.fc-col-header-cell-cushion{
        font-family: 'poppinsregular';
    }
    & .fc .fc-col-header-cell-cushion{
        font-family: 'poppinsregular';
        color: #799283;
    }
    & .fc .fc-button{
        background-color: #135846 !important;
        border: none;
    }
    & i{
        overflow-x: scroll;
    }
`