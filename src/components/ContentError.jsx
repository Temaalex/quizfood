import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3'

const Error = () => {
  let text = data.contents[0].error_text_Doctor;
  const [play] = useSound(ErrorSound);
  play()
  return (
    <main>
      <div className="header">
      <div className="TextOfPersone">
        <p className="ConnentOfPersone" key='1'>{text}</p>
      </div>
      <img className="Person" src={Persone} alt="Persone"/>
    </div>
      <div className='words'></div>
    </main>
  )
  
}

export default Error