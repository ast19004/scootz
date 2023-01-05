import { Box } from "@mui/material";

import BookingForm from "./BookingForm";

const BookingCard = (props) => {
  const classes = `${props.className}`;
  return (
    <Box className={classes}>
      <BookingForm date={props.date} />
    </Box>
  );
};

export default BookingCard;
