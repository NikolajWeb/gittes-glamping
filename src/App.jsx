import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays"; 
import StayDetails from "./pages/stayDetails/stayDetails";
import Navigation from "./components/navigation/Navigation";
import PageFooter from "./components/pageFooter/PageFooter";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Activities from "./pages/Activities";
import MyList from "./pages/MyList";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
    { path: "/stays/:id", element: <StayDetails /> },
    { path: "/contact/", element: <Contact /> },
    { path: "/activities", element: <Activities /> },
    { path: "/mylist", element: <MyList /> },
  ]);

  return (
    <>
      <Navigation />
      {routes}
      <PageFooter />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
