import PermanentDrawerLeft from "./components/navigation/DrawerNav";
import FAB from "./components/fabIcon/Fab";

//router
import MainRoutes from "./Routes";

function App() {
  return (
    <div>
      <PermanentDrawerLeft activePage={<MainRoutes />} />
      <FAB />
    </div>
  );
}

export default App;
