import "./App.css"
import Home from  "./Home/Home"
import Explore from  "./Explore/Explore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Routes,Route} from "react-router-dom"
function App() {
  
  

  return (
    <>
      <nav className ="nav-bar">
          <span className="nav-left">
            <FontAwesomeIcon icon={faBars} />
          </span>
        <span className="nav-center">
          TIME CAPSULE 2.0
        </span>
        <span className="nav-right">
          <p className="home-Text">HOME</p>
          <p className="capsules-Text">CAPSULES</p>
          <p className="about-Text">ABOUT</p>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
       
    </>
   
  )
}

export default App
