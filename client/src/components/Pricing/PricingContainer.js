import { Box } from "@mui/system";

import PricingCard from "./PricingCard";
import styles from "./PricingContainer.module.css";

const PricingContainer = () => {
  return (
    <Box
      className={styles.pricingContainer}
      sx={{
        backgroundColor: "darkorange",
        position: "absolute",
        zIndex: -500,
        width: "100%",
      }}
    >
      <PricingCard />
      <PricingCard />
      <PricingCard />
    </Box>
  );
};

export default PricingContainer;
