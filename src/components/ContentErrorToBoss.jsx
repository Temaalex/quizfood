import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3';
import { useNavigate, useLocation } from "react-router-dom";



const ErrorBoss = () => {
  //localStorage.setItem('check', 'false');
  let text = "Попробуем еще раз через несколько секунд?"
  const [play] = useSound(ErrorSound);
  play()
  let navigate = useNavigate();
  const next = () => {
      navigate('/toBoss')
  }
  //таймер
  	
	let x=10;
	function timer(){
		let timer;
		countdown();
		function countdown(){
			console.log(x)
		x--
		if (x===0){
			clearTimeout(timer);
			//localStorage.removeItem('check')
			next()
		}else{
			timer = setTimeout (countdown, 1000);
		}
		}
	}
window.onhashchange = function() { window.location.hash = '/ErrorBoss'; }
timer()
  //блок 
//   if(localStorage.getItem('check') === 'false'){
// 	window.location.hash = '/ErrorBoss'
// 	window.onhashchange = function() { window.location.hash = '/ErrorBoss'; }
//   } else {
// 	window.location.hash = '/toBoss'
// 	window.onhashchange = function() { window.location.hash = '/toBoss'; }
//   }

  
  
   return (
    <main>
      <div className="header">
      <div className="TextOfPerson">
        <p className="ConnentOfPerson" key='1'>{text}</p>
      </div>
      <img className="Person" src={Persone} alt="Persone"/>
    </div>
      <div className='words'>{x}</div>
    </main>
  )
  
}

export default ErrorBoss