import { Box } from "@mui/system";

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
        {props.accentText}
      </span>
      <img className={styles.scooterImg} src={props.src} alt={props.type} />
      <Box component="section" className={styles.priceDetails}>
        <h2 className={styles.scooterTitle}>{props.type}</h2>
        <p>Info about the motocycle and how fast it is.</p>
        <hr />
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th>2 Hours</th>
              <th>5 Hours</th>
              <th>ALL DAY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {props.prices.map((price) => (
                <td>${price}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default PricingCard;
