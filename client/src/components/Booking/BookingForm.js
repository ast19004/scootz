import { useState } from "react";
import { TextField, Typography } from "@mui/material";

import styled from "styled-components";

import ActionButton from "../ActionButton";

const BookingForm = (props) => {
  const dateStringOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

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
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Request booking
      </Typography>
      <Typography id="modal-modal-title" variant="h6" component="span">
        {/* {props.date.length > 0 && props.date.length < 2
          ? props.date[0].toLocaleDateString("en-us", dateStringOptions)
          : `${props.date[0].toLocaleDateString(
              "en-us",
              dateStringOptions
            )} to ${props.date[1].toDateString("en-us", dateStringOptions)}`} */}
        DATE
      </Typography>
      <CustomForm onSubmit={() => {}}>
        <TextField
          onChange={nameChangeHandler}
          value={enteredName}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name:"
          variant="outlined"
          required
        />
        <TextField
          onChange={emailChangeHandler}
          value={enteredEmail}
          style={{ width: "200px", margin: "5px" }}
          type="email"
          label="Email:"
          variant="outlined"
          required
        />
        <TextField
          onChange={noteChangeHandler}
          value={enteredNote}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Note:"
          variant="outlined"
        />

        <br />
        <ActionButton>Book Now</ActionButton>
      </CustomForm>
    </>
  );
};

export default BookingForm;

const CustomForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  margin-top: 2rem;
`;
