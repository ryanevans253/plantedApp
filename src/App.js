import PermanentDrawerLeft from "./components/navigation/DrawerNav";
import AllPlantCards from "./components/allPlants/AllPlants";
import SinglePlantPage from "./pages/SinglePlant";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      {/* <PermanentDrawerLeft activePage={<SinglePlantPage />} /> */}
      <PermanentDrawerLeft activePage={<Schedule />} />
    </div>
  );
}

export default App;
