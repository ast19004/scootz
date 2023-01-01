import { useState } from "react";

import { Box, Typography } from "@mui/material";
import RentalCalendar from "./RentalCalendar";

import PageBreak from "../PageBreak";
import ActionButton from "../ActionButton";
import BookingModal from "./BookingModal";

import styles from "./RentalCalendarContainer.module.css";

const RentalCalendarContainer = () => {
  const [bookingConfirmationOpen, setBookingConfirmationOpen] = useState(false);
  const [date, setDate] = useState([]);

  const handleDateSelection = (date) => {
    setDate(date);
  };

  const handleDisplayBookingConfirmation = () => {
    setBookingConfirmationOpen(true);
  };
  const onCloseBookingConfirmation = () => {
    setBookingConfirmationOpen(false);
  };
  return (
    <>
      <PageBreak id="booking" />
      <Box
        sx={{
          position: "relative",
          display: "grid",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Typography
          component="h2"
          sx={{ textAlign: "center", padding: "50px 0" }}
        >
          CHECK FOR AVAILABLE DATES
        </Typography>
        <RentalCalendar onChange={handleDateSelection} />
        <ActionButton
          onClick={handleDisplayBookingConfirmation}
          className={styles["btn-calendar"]}
          href="#"
          sx={{ width: "200px" }}
        >
          SEND REQUEST
        </ActionButton>
        <BookingModal
          open={bookingConfirmationOpen}
          onClose={onCloseBookingConfirmation}
          date={date}
        />
      </Box>
    </>
  );
};

export default RentalCalendarContainer;
