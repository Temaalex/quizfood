import Person from '../pictures/Persone.png';
import zloysnow from '../pictures/Boss.png';
import data from '../bd.json';
import { useNavigate, useLocation } from "react-router-dom"




const ToBoss = () => {
  let navigate = useNavigate();
  const next = () => {
      navigate('/42')
  }
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor">{data.contents[41].textDoctor}</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    <button onClick={next} className="button">ВПЕРЕД</button>
    <div className='wrapBox'>
      
      <img className="zloysnow" src={zloysnow} alt="zloysnow"/>
    </div>
    
  </main>
  )
  
}

export default ToBoss