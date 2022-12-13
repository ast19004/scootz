import playaDelCarmen from "../../assets/playa-del-carmen.png";
import lasUvas from "../../assets/las-uvas.png";
import castilloReal from "../../assets/castillo-real.png";

import SectionHeader from "../SectionHeader";
import DestinationCard from "./DestinationCard";

import { Box, Grid } from "@mui/material";

const Destinations = () => {
  const itemData = [
    {
      img: { playaDelCarmen },
      title: "Playa Del Carmen",
      location: "Main Land",
    },
    {
      img: { lasUvas },
      title: "Las Uvas",
      location: "West Side",
    },
    {
      img: { castilloReal },
      title: "Castillo Real",
      location: "North-Shore",
    },
  ];

  return (
    <Box component="div" sx={{ padding: "4%" }}>
      <section>
        <SectionHeader>EXPLORE OUR DESTINATIONS</SectionHeader>
        <p className="font-accent_secondary font-small">
          Paradise you will never forget
        </p>
      </section>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <DestinationCard
          image={playaDelCarmen}
          imageTitle="Playa Del Carmen"
          location="Playa Del Carmen"
          islandDirection="Main Land"
        />
        <DestinationCard
          image={lasUvas}
          imageTitle="Las Uvas"
          location="Las Uvas"
          islandDirection="West Side"
        />
        <DestinationCard
          image={castilloReal}
          imageTitle="Castillo Real"
          location="Castillo Real"
          islandDirection="North-Shore"
        />
      </Grid>
    </Box>
  );
};

export default Destinations;
