import { Box } from "@mui/system";
import fullMotoImg from "../../assets/Scooters/fullMoto.svg";

import styles from "./PricingCard.module.css";

const PricingCard = (props) => {
  return (
    <Box
      className={styles.priceCard}
      sx={{
        position: "relative",
        display: "grid",
        justifyItems: "center",
      }}
    >
      <span className={`${styles.underlayText} font-accent_secondary`}>
        SPEED
      </span>
      <img className={styles.scooterImg} src={fullMotoImg} alt="Full Moto" />
      <Box component="section" className={styles.priceDetails}>
        <h2>FULL MOTO</h2>
        <p>Info about the motocycle and how fast it is.</p>
        <hr />
        <table>
          <thead>
            <tr>
              <th>2 Hours</th>
              <th>5 Hours</th>
              <th>ALL DAY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$60</td>
              <td>$90</td>
              <td>$120</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default PricingCard;
