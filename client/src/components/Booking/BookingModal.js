import { Modal, Box } from "@mui/material";

import BookingForm from "./BookingForm";

import styles from "./BookingModal.module.css";

const BookingModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.bookingFormContainer}>
        <BookingForm date={props.date} />
      </Box>
    </Modal>
  );
};

export default BookingModal;
