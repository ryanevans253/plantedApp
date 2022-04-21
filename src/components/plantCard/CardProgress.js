import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

export default function CardProgress() {
  return (
    <Grid container mt={3} sx={{ justifyContent: "center" }}>
      <Grid alignItems="center" item xs={5}>
        <Typography variant="subtitle1" sx={{ color: "#D3D3D3" }}>
          Moisture
        </Typography>
        <CircularProgressWithLabel value="90" />
      </Grid>
      <Divider orientation="vertical" flexItem />

      <Grid alignItems="center" item xs={5}>
        <Typography variant="subtitle1" sx={{ color: "#D3D3D3" }}>
          Fertilizer
        </Typography>
        <CircularProgressWithLabel value="60" />
      </Grid>
    </Grid>
  );
}
