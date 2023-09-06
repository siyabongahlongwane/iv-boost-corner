import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-wrapper d-flex flex-col">
        <div className="topbar-wrapper black-bg">
          <Topbar></Topbar>
        </div>
        <div className="navbar-wrapper">
          <Navbar></Navbar>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero></Hero>}></Route>
            <Route path="/about-us" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/contact-us" element={<Contact></Contact>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
