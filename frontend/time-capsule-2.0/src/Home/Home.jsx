import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Home(){
  
  return (
    <>
      <nav className ="nav-bar">
          <span className="nav-left">
            <FontAwesomeIcon icon={faBars} />
          </span>
        <span className="nav-center">
          TIME-CAPSULE-2.0</span>
          <span className="nav-right">
            <p className="home-Text">HOME</p>
            <p className="capsules-Text">CAPSULES</p>
            <p className="about-Text">ABOUT</p>
          </span>
      </nav>
      <nav className="login-nav">
        <label className="email-label" for="email">
          EMAIL:
        </label>
        <input className="email-input" name="email" id="email" type="email" placeholder="enter your email..." />
        <label className="password-label" for="password">
          PASSWORD:
        </label>
        <input className="password-input" name="password" id="password" type="password" placeholder="enter your password.." />
        <button className="signIn-btn">SIGN IN</button>
      </nav>
    </>
    )
}
export default Home