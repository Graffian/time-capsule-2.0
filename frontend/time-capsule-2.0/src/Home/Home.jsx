import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"
function Home(){
  const navigate = useNavigate()
  function handleSignInBtn(){
    navigate("/explore")
  }
  return (
    <>
      
      <nav className="page-content">
        <p className="tagline">Gather your memories, dreams, and moments of joy, 
          safely tucked away today, to be rediscovered and cherished by the
          hearts of tomorrow ❤️</p>
        <nav className="login-nav">
          <label className="email-label" for="email">
            EMAIL:
          </label>
          <input className="email-input" name="email" id="email" type="email" placeholder="someone@example.com" />
          <label className="password-label" for="password">
            PASSWORD:
          </label>
          <input className="password-input" name="password" id="password" type="password" placeholder="Password" />
          <button onClick={handleSignInBtn} className="signIn-btn">SIGN IN</button>
        </nav>
      </nav>
    </>
    )
}
export default Home