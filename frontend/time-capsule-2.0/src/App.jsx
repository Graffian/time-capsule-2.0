import "./App.css"
import Home from  "./Home/Home"
import Explore from  "./Explore/Explore"
import Auth from  "./Auth/Auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Routes,Route} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function App() {
  const navigate = useNavigate()
  

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
          <p onClick={()=>{navigate("/")}} className="home-Text">HOME</p>
          <p className="capsules-Text">CAPSULES</p>
          <p className="about-Text">ABOUT</p>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
       
    </>
   
  )
}

export default App
