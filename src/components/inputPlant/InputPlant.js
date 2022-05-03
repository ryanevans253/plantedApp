import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { plantList } from "../../data/plantList";

//import * as React from 'react';

import Autocomplete from "@mui/material/Autocomplete";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";

export default function InputPlant() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: "500px",
            height: "60%",
            margin: "auto",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h3" component="div" gutterBottom>
            Add a new plant!
          </Typography>
          <Typography variant="6" component="div" gutterBottom>
            You can import from our database or add your own.
          </Typography>

          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={plantList}
                renderInput={(params) => (
                  <TextField {...params} label="Search" />
                )}
              />
            </Grid>
            <Grid item>
              <Typography variant="6" component="div">
                Add custom plant
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth="true"
                id="outlined-search"
                label="Name"
                type="search"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Label"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth="true"
                id="outlined-search"
                label="Nickname"
                type="search"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
