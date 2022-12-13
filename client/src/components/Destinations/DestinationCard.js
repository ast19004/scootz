import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const DestinationCard = (props) => {
  return (
    <Grid item xs={10} md={6} lg={4}>
      <Card>
        <img src={props.image} alt={props.location} />
        <CardContent>
          <Typography variant="h9" component="h3">
            {props.location}
          </Typography>
          <Typography component="h4">{props.islandDirection}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DestinationCard;
