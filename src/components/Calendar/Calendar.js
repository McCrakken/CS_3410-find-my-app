import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

class Calendar extends Component {

  render() {
    const handleDateClick = () => {
      alert('DateClick!');
    };
    return(
      <FullCalendar
        defaultView={"dayGridWeek"}
        dateClick={handleDateClick}
        height={640}
        plugins={[ dayGridPlugin, interactionPlugin ]}
      />
    )
  }
}

export default Calendar;