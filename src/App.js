import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PermanentDrawerLeft from "./components/navigation/DrawerNav";
import AllPlantCards from "./components/allPlants/AllPlants";
import SinglePlantPage from "./pages/SinglePlant";
import Schedule from "./pages/Schedule";

//router
import MainRoutes from "./Routes";

function App() {
  return (
    <div>
      <PermanentDrawerLeft activePage={<MainRoutes />} />
    </div>
    //prev working copy
    // <div className="App">
    //       {/* <PermanentDrawerLeft activePage={<SinglePlantPage />} /> */}
    //       <PermanentDrawerLeft activePage={<Schedule />} />
    //     </div>
  );
}

export default App;
