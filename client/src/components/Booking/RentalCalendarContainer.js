import { useState } from "react";

import { Box, Typography } from "@mui/material";
import RentalCalendar from "./RentalCalendar";

import PageBreak from "../PageBreak";
import ActionButton from "../ActionButton";
import BookingModal from "./BookingModal";
import BookingCard from "./BookingCard";

import styles from "./RentalCalendarContainer.module.css";

const RentalCalendarContainer = () => {
  const [bookingConfirmationOpen, setBookingConfirmationOpen] = useState(false);
  const [date, setDate] = useState(new Date());

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
      <Box className={styles.rentalContainer}>
        <Typography className={styles["rentalContainer-title"]} component="h2">
          CHECK FOR AVAILABLE DATES
        </Typography>

        <RentalCalendar
          className={styles["rentalContainer-calendar"]}
          onChange={handleDateSelection}
        />
        {!bookingConfirmationOpen && (
          <ActionButton
            onClick={handleDisplayBookingConfirmation}
            className={`SM ${styles["btn-calendar"]}`}
            href="#booking"
          >
            SEND REQUEST
          </ActionButton>
        )}
        <BookingModal
          className={`SM ${styles["rentalContainer-modal"]}`}
          open={bookingConfirmationOpen}
          onClose={onCloseBookingConfirmation}
          date={date}
        />
        <BookingCard
          className={`MD ${styles["rentalContainer-booking"]}`}
          date={date}
        />
      </Box>
    </>
  );
};

export default RentalCalendarContainer;
