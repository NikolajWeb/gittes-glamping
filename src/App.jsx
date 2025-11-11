import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays"; 
import Navigation from "./components/navigation/Navigation";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
  ]);

  return (
    <>
      <Navigation />
      {routes}
    </>
  );
}

export default App;
