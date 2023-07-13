import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  const [inViewStyle, setInViewStyle] = useState("");
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      setInViewStyle("slideLeft");
    }
    return () => setInViewStyle("");
  }, [inView]);

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
      <Box ref={ref} className={styles.rentalContainer}>
        <Typography
          className={`${styles["rentalContainer-title"]}`}
          component="h2"
        >
          CHECK FOR AVAILABLE DATES
        </Typography>

        <RentalCalendar
          className={`${styles["rentalContainer-calendar"]}`}
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
          className={`SM ${styles["rentalContainer-modal"]} ${inViewStyle}`}
          open={bookingConfirmationOpen}
          onClose={onCloseBookingConfirmation}
          date={date}
        />
        <BookingCard
          className={`MD ${styles["rentalContainer-booking"]} ${inViewStyle}`}
          date={date}
        />
      </Box>
    </>
  );
};

export default RentalCalendarContainer;
