import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useSelector } from 'react-redux'
import interactionPlugin from '@fullcalendar/interaction';
import { Tooltip } from "bootstrap";

export default function Calendar(){

    const selectorDataBookings = useSelector(state => state.db.data.bookings)
    let tooltipInstance = null;

    const otherStatus = (status) => {
        if(status === 'Check In'){
            return '#135846'
        }else{
            return '#FF9C3A'
        }
    }

    const otherStatusStyle = (status) => {
        if(status === 'Check In'){
            return 'tooltipcheckin'
        }else{
            return 'tooltipinprogress'
        }
    }

    const events = selectorDataBookings.map((booking) => {
        return {
            title: `${booking.guest}-${booking.roomType} #${booking.idRoom}`,
            start: new Date(`${booking.checkin}`),
            end: new Date(`${booking.checkout}`),
            color: booking.status === 'Check Out' ? '#E23428' : otherStatus(booking.status),
            checkin: `${booking.checkin}`,
            timein: `${booking.timein}`,
            checkout: `${booking.checkout}`,
            timeout: `${booking.timeout}`,
            status: `${booking.status}`
        }
    });

    function renderEventContent(eventInfo) {
        return (
          <>
            <i>{eventInfo.event.title}</i>
          </>
        )
    }

    const handleMouseEnter = (info) => {
          tooltipInstance = new Tooltip(info.el, {
            title: `${info.event.title} / start: ${info.event.extendedProps.checkin}-${info.event.extendedProps.timein} / end: ${info.event.extendedProps.checkout}-${info.event.extendedProps.timeout}`,
            placement: 'top',
            trigger: 'hover',
            container: 'body',
            customClass: info.event.extendedProps.status === 'Check Out' ? 'tooltipcheckout' : otherStatusStyle(info.event.extendedProps.status),
          });
    }

    return <>
        <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        expandRows={true}
        headerToolbar= {
            {
            left: 'prev,next today',
            center: `title`,
            right: 'dayGridMonth'
            }
        }
        navLinks={true}
        aspectRatio={2}
        height={510}
        editable={true}
        selectable={true}
        nowIndicator={true}
        dayMaxEvents={true}
        droppable={true}
        eventResizableFromStart={true}
        displayEventTime={true}
        eventDidMount={handleMouseEnter}
        />
    </>
}
//initialView='dayGridMonth'