import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect  } from 'react';

const Error = () => {
  const value = localStorage.getItem('check');  
  let text = data.contents[0].error_text_Person;
  const [count, setCount] = useState(10);
  const [play] = useSound(ErrorSound);
  if(count === 10){
	play()
  }
  console.log('/'+value)
  let navigate = useNavigate();
  const next = () => {
	if(count===0){
		console.log(count)
    window.onhashchange = function() { window.location.hash = '/'+value; }
    navigate('/'+value)
   
	}
  }
	window.onhashchange = function() { window.location.hash = '/0'; }
	
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);  
        }, 1000);
        return () => clearInterval(interval); 
        
    }, [next()]); 
    
  return (
    <main>
      <div className="header">
      <div className="TextOfPerson">
        <p className="ConnentOfPerson" key='1'>{text}</p>
      </div>
      <img className="Person" src={Persone} alt="Persone"/>
    </div>
      <div className='words'>{count}</div>
    </main>
  )
  
}

export default Error