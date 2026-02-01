import Person from '../pictures/Persone.png';
import Boss from '../pictures/Boss.png';
import data from '../bd.json';
import { useNavigate } from "react-router-dom"
import useSound from 'use-sound';
import boss from '../sound/boss.mp3'




const ToBoss = () => {
  const [play] = useSound(boss);
  play()
  let navigate = useNavigate();
  const next = () => {
      navigate('/32')
  }
  return (
    <main>
      <div className="header">
      <div className="TextOfPerson">
        <p className="ConnentOfPerson">{data.contents[31].textPerson}</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    <button onClick={next} className="button">ВПЕРЕД</button>
    <div className='wrapBox'>
      
      <img className="zloysnow" src={Boss} alt="Boss"/>
    </div>
    
  </main>
  )
  
}

export default ToBoss