import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Card_Header from "./Component/Card_Header";
import Slider from "./Component/Slider";
import Mobile_Component from "./Component/Mobile_Component";
import Electronics from "./Component/Electronics";
import Tv_Appliance from "./Component/Tv_Appliance";
import New_product from "./Component/New_product";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Full-width fixed Header */}
      <Header />

      {/* Add padding-top so content isn't hidden behind header */}
      <div className="pt-20 flex flex-col items-center w-full min-h-screen">
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
                  <New_product />
                </div>
              }
            />

            {/* Auth Pages */}
            <Route
              path="/login"
              element={
                <div className="flex justify-center items-center min-h-screen px-4">
                  <Login />
                </div>
              }
            />
            <Route
              path="/signup"
              element={
                <div className="flex justify-center items-center min-h-screen px-4">
                  <Signup />
                </div>
              }
            />

            {/* Example Cart */}
            <Route
              path="/cart"
              element={
                <div className="flex justify-center items-center min-h-screen px-4">
                  <Login />
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