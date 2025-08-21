import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Card_Header from "./Component/Card_Header";
import Slider from "./Component/Slider";
import Mobile_Component from "./Component/Mobile_Component";
import Electronics from "./Component/Electronics";
import Tv_Appliance from "./Component/Tv_Appliance";
import New_product from "./Component/New_product";
import Login from "./Component/Login";  // ✅ Import Login.jsx
import Signup from "./Component/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Fixed header */}
      <Header />

      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="app-container">
              <Card_Header />
              <Slider />
              <Mobile_Component />
              <Electronics />
              <Tv_Appliance />
              <New_product />
            </div>
          }
        />

        {/* ✅ Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;