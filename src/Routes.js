import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MyPlants from "./pages/MyPlants";
import Automation from "./pages/Automation";
import Tasks from "./pages/Tasks";
import Schedule from "./pages/Schedule";
import Integrations from "./pages/Integrations";
import Guides from "./pages/Guides";
import SinglePlantPage from "./pages/SinglePlant";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="plants" element={<MyPlants />} />
      <Route path="automation" element={<Automation />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="integrations" element={<Integrations />} />
      <Route path="guides" element={<Guides />} />

      <Route path="single" element={<SinglePlantPage />} />
    </Routes>
  );
}
