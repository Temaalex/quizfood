import data from '../bd.json';
import Persone from '../pictures/Persone.png';
import useSound from 'use-sound'; 
import ErrorSound from '../sound/gameOverLvl.mp3'
import { useNavigate } from "react-router-dom";
import { useState, useEffect  } from 'react';

const Error = () => {
  let [key, setKey] = useState(localStorage.getItem('check'));
  const value = localStorage.getItem('check');  
  let text = data.contents[0].error_text_Person;
  const [count, setCount] = useState(10);
  const [play] = useSound(ErrorSound);
  if(count === 10){
	  play()
  }
  let navigate = useNavigate();
  const next = () => {
    if(count===0){
      localStorage.removeItem('check')
      navigate('/'+key)
    }
  }

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