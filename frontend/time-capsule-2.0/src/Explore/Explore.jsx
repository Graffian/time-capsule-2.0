import "./Explore.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function Explore(){
  function handleAddBtn(){
    
  }
  return(
    <>
      <nav className="create-nav">
        <div className="input-div-1">
          <label for="capsule-name">CAPSULE NAME:</label>
          <input className="capsule-name-input" type="text" placeholder="name your capsule...."/>
          <label for="capsule-name">DESCRIPTION:</label>
          <input className="capsule-desc-input" type="text" placeholder="Brief description....."/>
        </div>
        <div className="input-div-2">
          <input className="capsule-type-input" type="text" placeholder="SELECT TYPE....."/>
          <span className="add-img-tab">
           <FontAwesomeIcon className="plusIcon" icon={faPlus} />
           <p>ADD IMAGES</p>
          </span>
            <button className="addBtn" onClick={handleAddBtn}>ADD CAPSULE</button>
        </div>
       
      </nav>
      
    </>
    )
}
export default Explore