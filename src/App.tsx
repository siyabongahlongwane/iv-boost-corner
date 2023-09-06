import './App.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Topbar from './components/Topbar';

function App() {

  return (
    <div className="app-wrapper d-flex flex-col">
      <div className="topbar-wrapper black-bg">
        <Topbar></Topbar>
      </div>
      <div className="navbar-wrapper">
      <Navbar></Navbar>
      </div>
      <div className="main-content">
        <Contact></Contact>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;
