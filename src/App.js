import PermanentDrawerLeft from "./components/navigation/DrawerNav";
import AllPlantCards from "./components/allPlants/AllPlants";
import SinglePlantPage from "./pages/SinglePlant";

function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft activePage={<SinglePlantPage />} />
    </div>
  );
}

export default App;
