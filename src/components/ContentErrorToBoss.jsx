import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3'
import { useNavigate, useLocation } from "react-router-dom"

const ErrorBoss = () => {
  let text = "Попробуем еще раз через несколько секунд?"
  const [play] = useSound(ErrorSound);
  play()
  let navigate = useNavigate();
  const next = () => {
      navigate('/toBoss')
  }
   return (
    <main>
      <div className="header">
      <div className="TextOfPerson">
        <p className="ConnentOfPerson" key='1'>{text}</p>
      </div>
      <img className="Person" src={Persone} alt="Persone"/>
    </div>
      <div className='words'></div>
      <button onClick={next} className="button">ВПЕРЕД</button>
    </main>
  )
  
}

export default ErrorBoss