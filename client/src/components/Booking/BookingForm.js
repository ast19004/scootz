import { useEffect, useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./BookingForm.module.css";
import ActionButton from "../ActionButton";

const BookingForm = (props) => {
  const dateStringOptions = {
    month: "short",
    day: "numeric",
  };
  const todaysDateString = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const notify = () => {
    toast.success(
      "Request Recieved! You will hear back from us within the next business day.",
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    props.onCloseModal && props.onCloseModal();
  };

  const [dateString, setDateString] = useState(todaysDateString);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNote, setEnteredNote] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  const handleBooking = () => {
    if (enteredName && enteredEmail) {
      notify();
    } else {
      setError("Please fill in all required* fields");
    }
  };

  useEffect(() => {
    let string;
    if (props.date.length === 1) {
      string = props.date[0].toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    if (props.date.length > 1) {
      string = `${props.date[0].toLocaleDateString(
        "en-us",
        dateStringOptions
      )} -
              ${props.date[1].toLocaleDateString("en-us", dateStringOptions)}`;
    }
    setDateString(string);
  }, [props.date]);

  return (
    <>
      <Box
        className={`${props.className && props.className}`}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
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
          <b>{!dateString ? todaysDateString : dateString}</b>
        </Typography>
      </Box>
      <form className={styles.bookingForm}>
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
        <ActionButton
          className={styles["bookingForm-btn"]}
          onClick={handleBooking}
        >
          Book Now
        </ActionButton>
        {error && (
          <Typography
            component="p"
            sx={{ textAlign: "center", padding: "10px 0" }}
          >
            {error}
          </Typography>
        )}
      </form>
    </>
  );
};

export default BookingForm;
