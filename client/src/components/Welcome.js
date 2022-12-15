import mainImage from "../assets/couple-riding-on-bike.png";
import { Box } from "@mui/system";

const Welcome = (props) => {
  return (
    <Box
      className={props.className}
      component="article"
      sx={{ position: "relative", zIndex: "-1" }}
    >
      <img src={mainImage} alt="Man & Woman riding on a scooter" width="100%" />
      <section className="overlay-text">
        <h1 className="font-large">COZUMEL</h1>
        <span className="font-accent_primary font-medium">
          explore the road to paradise
        </span>
      </section>
      <h2 className="midlay-text">SCOOTZ</h2>
    </Box>
  );
};

export default Welcome;
