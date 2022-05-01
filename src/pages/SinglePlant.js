//desktop view of single plant information page

import PhotoQuilt from "../components/singlePlantPage/PhotoQuilt";
import { MyQuilt } from "../components/singlePlantPage/PhotoQuilt";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import BasicTimeline from "../components/singlePlantPage/History";
import BasicTable from "../components/singlePlantPage/UpcomingTasks";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function SinglePlantPage(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h4" gutterBottom component="div">
            Name
          </Typography>
          <Item>Left </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h5" gutterBottom component="div">
            History
          </Typography>
          <Item>
            <BasicTimeline />
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Item>List of features</Item>
          <Typography variant="h5" gutterBottom component="div">
            Overview
          </Typography>
          <Item>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Item>
          <Typography variant="h5" gutterBottom component="div">
            Upcoming Tasks
          </Typography>
          <BasicTable />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h5" gutterBottom component="div">
            Details
          </Typography>
          <Item>
            <BasicTimeline />
          </Item>
          <Item>List of items</Item>
        </Grid>
      </Grid>
    </div>
  );
}
