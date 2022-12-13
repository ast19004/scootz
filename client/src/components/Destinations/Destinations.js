import playaDelCarmen from "../../assets/playa-del-carmen.png";
import lasUvas from "../../assets/las-uvas.png";
import castilloReal from "../../assets/castillo-real.png";

import SectionHeader from "../SectionHeader";

import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

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
      <ImageList sx={{ width: 510, height: 264 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.location}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Destinations;
