import "./Explore.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {useNavigate,Link} from "react-router-dom"
import {useState,useRef,useEffect} from "react"
function Explore(){
  const [capsules,setCapsules] = useState([])
  const typeInputRef = useRef()
  const capsuleNameInputRef = useRef()
  const capsuleDescInputRef = useRef()
  const creatorNameInputRef = useRef()
  const dateInputRef = useRef()
  const timeInputRef = useRef()
  const [inputType,setInputType] = useState("")
  const capsuleTextInputRef = useRef()
  const navigate = useNavigate()
  const [toggle,setToggle] = useState(false)
  useEffect(()=>{
    async function getTextCapsules(){
       const data = await fetch("http://localhost:5000/capsule/text")
      const response = await data.json()
      console.log(response)
      setCapsules(response)
     };
     getTextCapsules()
  },[])
  
  
  
  
  async function handleAddBtn(){
    
    console.log(capsules)
    if(inputType == "TEXT"){
    const capsuleInfo = {
      capsuleName:capsuleNameInputRef.current.value,
      capsuleDesc:capsuleDescInputRef.current.value,
      creatorName:creatorNameInputRef.current.value,
      date:dateInputRef.current.value,
      time:timeInputRef.current.value,
      capsuleInputType : inputType,
      capsuleTextInput : capsuleTextInputRef.current.value
    }
    const data = await fetch("http://localhost:5000/capsule/text" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify(capsuleInfo)
    })
    const response = await data.json()
    capsuleTextInputRef.current.value=""
    capsuleNameInputRef.current.value=""
    capsuleDescInputRef.current.value=""
    creatorNameInputRef.current.value=""
    dateInputRef.current.value=""
    timeInputRef.current.value=""
    setInputType("")
    }
    for(let i=1;i<=capsules.length;i++){
      
      const LinkElement = document.querySelector(`#root > nav.created-capsule-nav > a:nth-child(${i})`)
      LinkElement.setAttribute("href" , `explore/capsule/${i}`)
    }
    navigate("/explore")
  }
  function textField(){
    if(inputType == "TEXT"){
      return (<textarea ref={capsuleTextInputRef} className="capsule-desc-input input-shit" type="text">Add TEXT...</textarea>)
    }else{
      return (<p></p>)
    }
    
  }
  return(
    <>
      <nav className="create-nav">
    
          <div className="input-div-1">
            <label for="capsule-name">CAPSULE NAME:</label>
            <input ref={capsuleNameInputRef} id = "capsule-name" className="capsule-name-input input-shit" type="text" placeholder="name your capsule...."/>
            <label for="capsule-name">DESCRIPTION:</label>
            <textarea ref={capsuleDescInputRef}  className="capsule-desc-input input-shit" type="text">Add Description...</textarea>
            <label for="capsule-name">CREATOR NAME:</label>
            <input ref={creatorNameInputRef} className="capsule-name-input input-shit" type="text" placeholder=" your name...."/>
          </div>
          <div className="input-div-2">
            <input value={inputType}  className="capsule-type-input input-shit" type="text" placeholder="SELECT TYPE....."/>
            <div className="type-div">
              
              <li  onClick={()=>setInputType("IMAGE")} className="type-1">IMAGE</li>
              <li  onClick={()=>setInputType("TEXT")} className="type-2">TEXT</li>
              <li  onClick={()=>setInputType("VIDEOS")} className="type-3">VIDEOS</li>
              
            
            </div>
            <span className="date-input input-shit">
            {textField()}
              <span className="open-date-input input-shit">
                OPENING DATE:
                <input ref={dateInputRef} className="capsule-type-input input-shit" type="date" placeholder="SELECT TYPE....."/>
              </span>
              <span className="close-time-input input-shit">
                CLOSING TIME:
                <input ref={timeInputRef} className="capsule-type-input input-shit" type="time" placeholder="SELECT TYPE....."/>
              </span>
            </span>
           
            <span className="add-img-tab">
              <label for="fileUpload" style={{cursor:"pointer"}}>
                <FontAwesomeIcon className="plusIcon" style={{marginInline: "1em"}} icon={faPlus} />
                ADD FILES
              </label>
              <input name="capsule-pics" type="file" id="fileUpload" style={{"display":"none"}}/>
              
            </span>
             
            <button type="submit" className="addBtn" onClick={handleAddBtn}>ADD CAPSULE</button>
          </div>
            
       
</nav>
      

      {/*------------CREATED CAPSULES SECTION------------------*/}
      <p style={{fontSize:"3em", color:"white", marginTop:"50px",
        backgroundImage:"linear-gradient(to right, #00a35f, #00B2FF)",
        display:"flex", justifyContent:"center", alignContent:"Center"}}>
          CREATED CAPSULES
        </p>
      <nav className="created-capsule-nav">
        
          {capsules.map(capsule=>(
            <a style={{ textDecoration:"none"}}>
          <div className="capsule">
          <span style={{"fontSize":"1.4em"}} className="span-left">
            {capsule.capsulename}
          </span>
           <span className="span-center">
            {capsule.capsuledesc}
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:{capsule.creatorname}</p>
            <p  className="createdOnText">CREATED ON:{capsule.date}</p>
            {capsule.time == "" ? (<p className="opensInText">OPEN ALL TIME</p>):
                       (<p className="opensInText">OPENS IN: {capsule.time}</p>)
            }
          </span>
        </div>
          </a>
          ))}
      </nav>
      <footer className="explore-footer">
        <p className="text-sm">&copy; 2025 <span style={{fontFamily:"monospace", fontSize:"1.5em"}}> Team Graffian. </span> All rights reserved.</p>
      </footer>
    </>
    )
}
export default Explore