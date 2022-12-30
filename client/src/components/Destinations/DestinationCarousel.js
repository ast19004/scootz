import playaDelCarmen from "../../assets/playa-del-carmen.png";
import lasUvas from "../../assets/las-uvas.png";
import castilloReal from "../../assets/castillo-real.png";

import Carousel from "react-material-ui-carousel";
import DestinationCard from "./DestinationCard";

const DestinationCarousel = () => {
  return (
    <Carousel animation="slide">
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
    </Carousel>
  );
};

export default DestinationCarousel;
