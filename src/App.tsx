import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="app-wrapper d-flex flex-col">
        <div className="topbar-wrapper black-bg">
          <Topbar></Topbar>
        </div>
        <div className="navbar-wrapper">
          <Navbar></Navbar>
        </div>
        <div className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
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
