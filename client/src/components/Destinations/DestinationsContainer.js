import { Box, Grid } from "@mui/material";

import SectionHeader from "../SectionHeader";
import Destinations from "./Destinations";
import DestinationCarousel from "./DestinationCarousel";

const DestinationsContainer = () => {
  return (
    <Box component="div" sx={{ padding: "4%" }}>
      <section>
        <SectionHeader>EXPLORE OUR DESTINATIONS</SectionHeader>
        <p className="font-accent_secondary font-small">
          Paradise you will never forget
        </p>
      </section>
      {/* <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      > */}
      <DestinationCarousel />
      {/* </Grid> */}
    </Box>
  );
};

export default DestinationsContainer;
