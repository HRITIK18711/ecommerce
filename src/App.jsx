import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Card_Header from "./Component/Card_Header";
import Slider from "./Component/Slider";
import Mobile_Component from "./Component/Mobile_Component";
import Electronics from "./Component/Electronics";
import Tv_Appliance from "./Component/Tv_Appliance";
import Furniture from "./Component/Furniture";

import "./App.css";

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="main-content">
      {isHome ? (
        <>
          <Card_Header />
          <Slider />
          <Mobile_Component />
          <Electronics />
          <Tv_Appliance />
          <Furniture />
        </>
      ) : (
        <Routes>
          <Route path="/mobiles" element={<Mobile_Component />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/appliances" element={<Tv_Appliance />} />
          <Route path="/furniture" element={<Furniture />} />
        </Routes>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      
      <MainContent />
    </Router>
  );
}

export default App;
