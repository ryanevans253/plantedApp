//desktop view of single plant information page

import PhotoQuilt from "../components/singlePlantPage/PhotoQuilt";
import { MyQuilt } from "../components/singlePlantPage/PhotoQuilt";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import BasicTimeline from "../components/singlePlantPage/History";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SinglePlantPage(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Item>Left </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <BasicTimeline />
          </Item>
        </Grid>
      </Grid>

      <MyQuilt />
    </div>
  );
}
