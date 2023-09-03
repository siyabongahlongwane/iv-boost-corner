import './App.css'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar';

function App() {

  return (
    <div className="app-wrapper d-flex flex-col">
      <div className="topbar-wrapper">
        <Topbar></Topbar>
      </div>
      <div className="navbar-wrapper">
      <Navbar></Navbar>
      </div>
      <div className="main-content">

      </div>
    </div>
  )
}

export default App;
