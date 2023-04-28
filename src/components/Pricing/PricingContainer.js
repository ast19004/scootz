import { Box } from "@mui/system";
import PageBreak from "../PageBreak";

import fullMotoImg from "../../assets/Scooters/fullMoto.svg";
import cargoMotoImg from "../../assets/Scooters/cargoMoto.svg";
import basicMotoImg from "../../assets/Scooters/basicMoto.svg";

import PricingCard from "./PricingCard";
import styles from "./PricingContainer.module.css";

const PricingContainer = () => {
  return (
    <>
      <PageBreak id="pricing" />
      <Box className={styles.pricingContainer}>
        <PricingCard
          src={fullMotoImg}
          accentText="SPEED"
          type="FULL MOTO"
          prices={[60, 90, 120]}
        />
        <PricingCard
          src={cargoMotoImg}
          accentText="CARGO"
          type="CARGO MOTO"
          prices={[60, 80, 110]}
        />
        <PricingCard
          src={basicMotoImg}
          accentText="BASIC"
          type="BASIC MOTO"
          prices={[40, 70, 100]}
        />
      </Box>
    </>
  );
};

export default PricingContainer;
