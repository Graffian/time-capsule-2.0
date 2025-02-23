import "./Auth.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useNavigate , Link} from "react-router-dom"
import {useRef} from "react"
function Auth(){
  const navigate = useNavigate()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  async function handleSignInBtn(){
    navigate("/explore")
    const userInfo = {
      email : emailInputRef.current.value,
      password: passwordInputRef.current.value
    }
    const data = await fetch("http://localhost:5000/api/users",{
      credentials:"include",
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(userInfo)
    })
    const response = await data.json()
    console.log(response)
    
  }
  
  return( 
  <>
      
      <nav className="page-content">
        {/*<p className="tagline">Gather your memories, dreams, and moments of joy, 
          safely tucked away today, to be rediscovered and cherished by the
          hearts of tomorrow ❤️</p>*/}
        <nav className="login-nav">
          <label className="email-label" for="email">
            EMAIL:
          </label>
          <input ref={emailInputRef} className="email-input" name="email" id="email" type="email" placeholder="someone@example.com" />
          <label className="password-label" for="password">
            PASSWORD:
          </label>
          <input ref={passwordInputRef} className="password-input" name="password" id="password" type="password" placeholder="Password" />
          <button onClick={handleSignInBtn} className="signIn-btn">SIGN IN</button>
          <Link to="/">having problems? Log in here first</Link>
        </nav>
      </nav>
      <footer class="w-full bg-gray-800 text-white py-4">
        <p class="text-sm">&copy; 2025 <span style={{fontFamily:"monospace", fontSize:"1.5em"}}> Graffian. </span> All rights reserved.</p>
      </footer>
    </>
    
    )
}
export default Auth