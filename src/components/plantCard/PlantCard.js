import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardAvatar from "./CardAvatar";
import ImageTest from "../../assets/images/Image";
import img from "../../assets/images/fig.jpeg";
import CardProgress from "./CardProgress";

export default function PlantCard(props) {
  // const nickname = props.nickname;
  // const name = props.name;
  const currentMoisture = 8;
  const health = 6;
  const tasks = 4;

  return (
    <Card sx={{ maxWidth: 300, paddingBottom: 3, paddingTop: 2 }}>
      <CardActionArea>
        <CardContent align="center">
          <CardAvatar img={img} imgAltTag="Fiddle" />
          <Typography align="center" variant="h6" component="div">
            {props.nickname}
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            {props.name}
          </Typography>
          <CardProgress />
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="outlined" color="success">
          View more
        </Button>
      </CardActions>
    </Card>
  );
}
