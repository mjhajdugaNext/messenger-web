import React from "react";
import "../App.css";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function AppMain() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") navigate("/auth");
  }, []);

  return <AppRoutes />;
}

function App() {
  return (
    <BrowserRouter>
      <AppMain />
    </BrowserRouter>
  );
}

export default App;
