import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function RentalCalendar(props) {
  const [date, setDate] = useState(new Date());

  const handleDateSelection = (event) => {
    setDate(event.target.current);
    props.onChange(event.target.current);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateSelection}
        value={date}
        selectRange={true}
      />
    </div>
  );
}

export default RentalCalendar;
