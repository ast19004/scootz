import { Box, Grid } from "@mui/material";
import PageBreak from "../PageBreak";

import SectionHeader from "../SectionHeader";
import DestinationCarousel from "./DestinationCarousel";
import Destinations from "./Destinations";

const DestinationsContainer = () => {
  return (
    <>
      <PageBreak id="locations" />
      <Box
        className="destinationsContainer"
        component="div"
        sx={{ padding: "4%" }}
      >
        <section>
          <SectionHeader>EXPLORE OUR DESTINATIONS</SectionHeader>
          <p className="font-accent_secondary font-small">
            Paradise you will never forget
          </p>
        </section>
        <DestinationCarousel className="SM" />
        <Grid
          className="MD-flex"
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Destinations />
        </Grid>
      </Box>
    </>
  );
};

export default DestinationsContainer;
