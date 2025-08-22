import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Card_Header from "./Component/Card_Header";
import Slider from "./Component/Slider";
import Mobile_Component from "./Component/Mobile_Component";
import Electronics from "./Component/Electronics";
import Tv_Appliance from "./Component/Tv_Appliance";
import Furniture from "./Component/Furniture";

import "./App.css";

function App() {
  return (
    <Router>
      {/* Sticky Header */}
      <Header />

      {/* Content Wrapper */}
      <div className="pt-20 w-full"> {/* Add padding equal to header height */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="flex flex-col items-center w-full">
                  <Card_Header />
                  <Slider />
                  <Mobile_Component />
                  <Electronics />
                  <Tv_Appliance />
                  <Furniture />
                </div>
              }
            />

            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;