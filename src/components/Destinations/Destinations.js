import playaDelCarmen from "../../assets/playa-del-carmen.png";
import lasUvas from "../../assets/las-uvas.png";
import castilloReal from "../../assets/castillo-real.png";

import DestinationCard from "./DestinationCard";

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
    <>
      <DestinationCard
        key="1"
        image={playaDelCarmen}
        imageTitle="Playa Del Carmen"
        location="Playa Del Carmen"
        islandDirection="Main Land"
      />
      <DestinationCard
        key="2"
        image={lasUvas}
        imageTitle="Las Uvas"
        location="Las Uvas"
        islandDirection="West Side"
      />
      <DestinationCard
        key="3"
        image={castilloReal}
        imageTitle="Castillo Real"
        location="Castillo Real"
        islandDirection="North-Shore"
      />
    </>
  );
};

export default Destinations;
