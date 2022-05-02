import { Routes, Route, Navigate } from "react-router-dom";

import SinglePlantPage from "./pages/SinglePlant";
import Schedule from "./pages/Schedule";
import AllPlantCards from "./components/allPlants/AllPlants";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SinglePlantPage />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="myplants" element={<AllPlantCards />} />
    </Routes>
  );
}
