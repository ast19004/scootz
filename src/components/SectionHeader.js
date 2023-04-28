import { Box } from "@mui/system";

const SectionHeader = (props) => {
  return (
    <Box
      component="h2"
      sx={{ fontSize: "12px", color: "#0E0E0E", fontWeight: "400" }}
    >
      {props.children}
    </Box>
  );
};

export default SectionHeader;
