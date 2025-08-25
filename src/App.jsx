import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Card_Header from "./Component/Card_Header";
import Slider from "./Component/Slider";
import Mobile_Component from "./Component/Mobile_Component";
import Fashion from "./Component/Fashion";
import Tv_Appliance from "./Component/Tv_Appliance";
import Footer from "./Component/Footer";
import Mobile from "./Component/Mobile"; // your Mobile.jsx page
import Samsung from "./Component/Samsung";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
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
          <Fashion />
          <Tv_Appliance />
          
        </>
      ) : (
        <Routes>
          <Route path="/mobiles" element={<Mobile_Component />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/appliances" element={<Tv_Appliance />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/sam" element={<Samsung />} />
          
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
      <Footer/>
    </Router>
  );
}

export default App;
