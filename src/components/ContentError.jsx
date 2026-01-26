import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3'

const Error = () => {
  let text = data.contents[0].error_text_Person;
  const [play] = useSound(ErrorSound);
  play()

  //таймер
  function timer(){
    let timer;
    let x=30;
    countdown();
    function countdown(){
    document.querySelector('.head__content').innerText = "Ответ неправильный!"+'\n'+"Повторная попытка через "+x+" секунд";
    x--
    if (x<0){
      clearTimeout(timer);
    }else{
      timer = setTimeout (countdown, 1000);
    }
    }
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
    </main>
  )
  
}

export default Error