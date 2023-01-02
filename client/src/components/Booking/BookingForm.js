import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

import styles from "./BookingForm.module.css";
import ActionButton from "../ActionButton";

const BookingForm = (props) => {
  // const dateStringOptions = {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // };

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNote, setEnteredNote] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <b>
            Request
            <br />
            booking
          </b>
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="span"
          sx={{
            backgroundColor: "white",
            color: "#A6A6A6",
            alignSelf: "center",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          {/* {props.date.length > 0 && props.date.length < 2
          ? props.date[0].toLocaleDateString("en-us", dateStringOptions)
          : `${props.date[0].toLocaleDateString(
              "en-us",
              dateStringOptions
            )} to ${props.date[1].toDateString("en-us", dateStringOptions)}`} */}
          <b>April 7th 2023</b>
        </Typography>
      </Box>
      <form className={styles.bookingForm} onSubmit={() => {}}>
        <TextField
          className={styles["bookingForm-input"]}
          onChange={nameChangeHandler}
          value={enteredName}
          type="text"
          label="Name:"
          variant="outlined"
          required
        />
        <TextField
          className={styles["bookingForm-input"]}
          onChange={emailChangeHandler}
          value={enteredEmail}
          type="email"
          label="Email:"
          variant="outlined"
          required
        />
        <TextField
          multiline
          className={styles["bookingForm-input"]}
          onChange={noteChangeHandler}
          value={enteredNote}
          type="text"
          label="Note:"
          variant="outlined"
        />

        <br />
        <ActionButton className={styles["bookingForm-btn"]}>
          Book Now
        </ActionButton>
      </form>
    </>
  );
};

export default BookingForm;
