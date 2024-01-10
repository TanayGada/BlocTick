import React from "react";
import Navbar from "./components/Navbar/Navbar1";
import Footer from "./components/Footer/Footer1";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Class, Margin } from "@mui/icons-material";
function App() {
  return (
    <>
      <div className="animated-background ">
        <Navbar />
        <div style={{width:"80% ", margin:'0 auto' }}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
