import { plants } from "../../data/plantData";
import { Grid } from "@mui/material";
import PlantCard from "../plantCard/PlantCard";

export default function AllPlantCards() {
  const data = plants;
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <PlantCard
            nickname={item.nickname}
            name={item.name}
            key={item.plantID}
          />
        </Grid>
      ))}
    </Grid>
  );
}
