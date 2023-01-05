import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import styles from "./PricingCard.module.css";

const PricingCard = (props) => {
  const [inViewStyle, setInViewStyle] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setInViewStyle(styles.slideDownRight);
    }
    return () => setInViewStyle("");
  }, [inView]);

  return (
    <Box
      ref={ref}
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
      <img
        className={`${styles.scooterImg} ${inView && inViewStyle}`}
        src={props.src}
        alt={props.type}
      />
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
                <td key={price}>${price}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default PricingCard;
