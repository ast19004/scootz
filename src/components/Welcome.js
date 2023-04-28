import { useEffect, useRef, useState, useContext } from "react";
import mainImage from "../assets/couple-riding-on-bike.png";
import { Box } from "@mui/system";

import ScrollContext from "../store/scroll-context";

const Welcome = (props) => {
  const scrollCtx = useContext(ScrollContext);
  const welcomeText = useRef();

  const [welcomeTextData, setWelcomeTextData] = useState(null);

  useEffect(() => {
    setWelcomeTextData(welcomeText.current.getBoundingClientRect());
    // setWelcomeTextOffset(welcomeText.current.offsetTop);
  }, [scrollCtx.offsetY]);

  useEffect(() => {
    if (!welcomeTextData) {
      return;
    }
    if (Math.floor(welcomeTextData.top) === 0) {
    }
  }, [scrollCtx.offsetY, welcomeTextData]);

  return (
    <Box
      className={props.className}
      component="article"
      sx={{ position: "relative", zIndex: "-1" }}
    >
      <img src={mainImage} alt="Man & Woman riding on a scooter" width="100%" />
      <section className="overlay-text" ref={welcomeText}>
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
