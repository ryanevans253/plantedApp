import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AvatarPic from "../../assets/avatars/ryan.png";
import logo from "../../assets/images/plantlogo.svg";

//icons
import { navData, helpNavData } from "./NavData";

//top nav
import { Avatar } from "@mui/material";

//cards
import PlantCard from "../plantCard/PlantCard";
import { plants } from "../../data/plantData";
import AllPlantCards from "../allPlants/AllPlants";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePlantPage from "../../pages/SinglePlant";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#39b54a",
        }}
      >
        <Toolbar>
          {/* //turn this into a route with content being current page */}
          <Typography variant="h6" noWrap component="div">
            My Plants
          </Typography>

          <Avatar sx={{ ml: "auto" }} alt="Ryan Evans" src={AvatarPic} />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} />
        </Toolbar>

        <Divider />

        <List>
          {navData.map((item) => {
            const Tag = item.icon;
            return (
              <ListItem button key={item.text}>
                <ListItemIcon>{Tag}</ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ mt: "auto" }} />

        <List>
          {helpNavData.map((item) => {
            const Tag = item.icon;
            return (
              <ListItem button key={item.text}>
                <ListItemIcon>{Tag}</ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* ///content here///////////////////////////// */}
        {/* <AllPlantCards /> */}
        {props.activePage}
      </Box>
    </Box>
  );
}
