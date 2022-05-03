import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PermanentDrawerLeft from "./components/navigation/DrawerNav";
import AllPlantCards from "./components/allPlants/AllPlants";
import SinglePlantPage from "./pages/SinglePlant";
import Schedule from "./pages/Schedule";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//router
import MainRoutes from "./Routes";

function App() {
  return (
    <div>
      <PermanentDrawerLeft activePage={<MainRoutes />} />
      <Fab
        color="success"
        aria-label="add"
        sx={{ position: "absolute", marginLeft: "90%" }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
