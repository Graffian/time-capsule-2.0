import "./App.css"
import Home from  "./Home/Home"
import Explore from  "./Explore/Explore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Routes,Route} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function App() {
  const navigate = useNavigate()
  

  return (
    <>
      <nav className ="nav-bar">

        <span className="nav-center">
          TIME CAPSULE 2.0
        </span>
        <span className="nav-left">
           <FontAwesomeIcon icon={faBars} />
        </span>
        <span className="nav-right">
          <p onClick={()=>{navigate("/")}} className="home-Text">HOME</p>
          <p className="capsules-Text">CAPSULES</p>
          <p className="about-Text">ABOUT</p>
        </span>
        <span className="sidebar">
          <p onClick={()=>{hideSidebar()}}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></p>
          <p onClick={()=>{navigate("/")}} className="home-Text">HOME</p>
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
