import { Modal, Box } from "@mui/material";

import BookingForm from "./BookingForm";

const style = {
  display: "grid",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  "@media(min-width: 450px)": {
    width: "400px",
  },
};

const BookingModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ style }}>
        <BookingForm date={props.date} />
      </Box>
    </Modal>
  );
};

export default BookingModal;
