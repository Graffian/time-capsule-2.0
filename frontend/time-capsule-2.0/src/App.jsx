import "./Home/Home.css"
import Home from  "./Home/Home"
import Explore from  "./Explore/Explore"
import Auth from  "./Auth/Auth"
import Capsule from  "./Capsules/Capsule"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Routes,Route} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function App() {
  const navigate = useNavigate()
  

  return (
    <>
      <nav className ="nav-bar">

        <span className="nav-center" id="logo">
          TIME CAPSULE 2.0
        </span>
        {/* <span className="nav-left">
           <FontAwesomeIcon icon={faBars} />
        </span> */}
        <span className="nav-right" id="disappear">
          <p onClick={()=>{navigate("/")}} className="home-Text">HOME</p>
          <p className="capsules-Text">CAPSULES</p>
          <p className="about-Text">ABOUT</p>
        </span>
        <span className="menu-icon" onClick={()=>{showSidebar()}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
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
        <Route path="/capsule/:id" element={<Capsule/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
       
    </>
   
  )
  function showSidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display='flex'
  }
  function hideSidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display='none'
  }
}

export default App
