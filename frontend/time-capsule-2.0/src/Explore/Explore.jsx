import "./Explore.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"
import {useState,useRef} from "react"
function Explore(){
  const typeInputRef = useRef()
  const capsuleNameInputRef = useRef()
  const capsuleDescInputRef = useRef()
  const creatorNameInputRef = useRef()
  const dateInputRef = useRef()
  const timeInputRef = useRef()
  
  
  function handleAddBtn(){
    const capsuleInfo = {
      capsuleName:capsuleNameInputRef.current.value,
      capsuleDesc:capsuleDescInputRef.current.value,
      creatorName:creatorNameInputRef.current.value,
      date:dateInputRef.current.value,
      time:timeInputRef.current.value
    }
    const data = fetch("http://localhost:5000/capsules" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(capsuleInfo)
    })
    const response = data.json()
    console.log(response)
  }
  return(
    <>
      <nav className="create-nav">
       
        <div className="input-div-1">
          <label for="capsule-name">CAPSULE NAME:</label>
          <input ref={capsuleNameInputRef} className="capsule-name-input input-shit" type="text" placeholder="name your capsule...."/>
          <label for="capsule-name">DESCRIPTION:</label>
          <input ref={capsuleDescInputRef} className="capsule-desc-input input-shit" type="text" placeholder="Brief description....."/>
          <label for="capsule-name">CREATOR:</label>
          <input ref={creatorNameInputRef} className="capsule-desc-input input-shit" type="text" placeholder="your name....."/>
        </div>
        <div className="input-div-2">
          <input ref={typeInputRef}  className="capsule-type-input input-shit" type="text" placeholder="SELECT TYPE....."/>
          <div className="type-div">
            
            <li  onClick={()=>typeInputRef.current.value="IMAGE"} className="type-1">IMAGE</li>
            <li  onClick={()=>typeInputRef.current.value="TEXT"} className="type-2">TEXT</li>
            <li  onClick={()=>typeInputRef.current.value="VIDEOS"} className="type-3">VIDEOS</li>
          
          </div>
          <span className="date-input input-shit">
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
             <form action="http://localhost:5000/uploads" method="post" encType="multipart/form-data">
              <label for="fileUpload">
           <FontAwesomeIcon className="plusIcon" icon={faPlus} />
              </label>
            
              <input name="capsule-pics" type="file" id="fileUpload" style={{"display":"none"}}/>
              </form>
           <p>ADD IMAGES</p>
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
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
        <div className="capsule">
          <span style={{"font-size":"1.4em"}} className="span-left">
            INDEPENDENCE DAY
          </span>
          <span className="span-center">
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus commodo magna a euismod. Vivamus sed nisi vitae dolor suscipit pellentesque in vel ligula. `
          </span>
          <span className="span-right">
            <p className="creatorText">CREATOR:AYUSH</p>
            <p className="createdOnTex">CREATED ON:12/02/2024</p>
            <p className="opensInText">OPENS IN : 00:00:59</p>
          </span>
        </div>
      </nav>
      <footer className="w-full bg-gray-800 text-white py-4">
        <p className="text-sm">&copy; 2025 <span style={{fontFamily:"monospace", fontSize:"1.5em"}}> Team Graffian. </span> All rights reserved.</p>
      </footer>
    </>
    )
}
export default Explore