import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function RentalCalendar(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //everytime date changes send date to RentalCalendar parent
    props.onChange(date);
  }, [date]);

  return (
    <div className={`calendar-container ${props.className && props.className}`}>
      <Calendar onChange={setDate} value={date} selectRange allowPartialRange />
    </div>
  );
}

export default RentalCalendar;
