import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays"; 
import StayDetails from "./pages/stayDetails/stayDetails";
import Navigation from "./components/navigation/Navigation";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
    { path: "/stays/:id", element: <StayDetails /> }
  ]);

  return (
    <>
      <Navigation />
      {routes}
    </>
  );
}

export default App;
