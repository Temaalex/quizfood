import Person from '../pictures/Persone.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import win from '../sound/winLvl.mp3'
import info from '../pictures/Info.png'

import lulakebab from '../pictures/lulakebab.png';
import pure from '../pictures/pure.png';
import holodec from '../pictures/holodec.png';
import lazania from '../pictures/lazania.png';
import olive from '../pictures/olive.png';
import ramen from '../pictures/ramen.png';
import tartaletka from '../pictures/tartaletka.png';
import oblepiha from '../pictures/oblepiha.png';
import moroshka from '../pictures/moroshka.png';
import tart from '../pictures/tart.png';
import shelkovica from '../pictures/shelkovica.png';
import golubica from '../pictures/golubica.png';
import krugovnik from '../pictures/krugovnik.png';
import persik from '../pictures/persik.png';
import pitahay from '../pictures/pitahay.png';
import rediska from '../pictures/rediska.png';
import patison from '../pictures/patison.png';
import repa from '../pictures/repa.png';
import pattison from '../pictures/pattison.png';

const QuizText = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();
const [play] = useSound(win);

function toBoss(){
    let emptyArray = new Array()
    let checkedArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    for (let i = 0; i < localStorage.length; i++) {  
      const key = localStorage.key(i);  
      const value = localStorage.getItem(key);  
      emptyArray.push(key)
    }  
      emptyArray.sort((a, b) => a - b)
    if(JSON.stringify(emptyArray) === JSON.stringify(checkedArray)){
      document.querySelector('.buttonToBoss').style.display = 'block'
    }      
}
const getToBoss = () =>{
  navigate('/toBoss')
}

const checked = () => {
  let answer = data.contents[key].answer;
  let check = document.querySelector('.inputAppWords')?.value.replace(/\s/g, "");
  if(check.toLowerCase() === answer) {
    localStorage.setItem(key, true)
    document.querySelector('.inputAppWords').style.backgroundColor = '#2adc2a'
    document.querySelector('.ConnentOfPerson').innerHTML = "Правильно, следуй дальше"
    if(key === 29){
    document.querySelector('.buttonInfo').style.display = 'block'
    }
    play()
    toBoss()
   }else{
     navigate('/0')
   }
}
function getimg(){
  if(key===10){
    return <img className="imgCashew" src={lulakebab} alt="lulakebab"/>
  }
  if(key===11){
    return <img className="imgCashew" src={pure} alt="pure"/>
  }
  if(key===14){
    return <img className="imgCashew" src={holodec} alt="holodec"/>
  }
  if(key===15){
    return <img className="imgCashew" src={lazania} alt="lazania"/>
  }
  if(key===17){
    return <img className="imgCashew" src={olive} alt="olive"/>
  }
  if(key===18){
    return <img className="imgCashew" src={ramen} alt="ramen"/>
  }
   if(key===19){
    return <img className="imgCashew" src={tart} alt="tart"/>
  }
   if(key===20){
    return <img className="imgCashew" src={tartaletka} alt="tartaletka"/>
  }
   if(key===21){
    return <img className="imgCashew" src={oblepiha} alt="oblepiha"/>
  }
   if(key===22){
    return <img className="imgCashew" src={moroshka} alt="moroshka"/>
  }
   if(key===23){
    return <img className="imgCashew" src={shelkovica} alt="shelkovica"/>
  }
   if(key===24){
    return <img className="imgCashew" src={golubica} alt="golubica"/>
  }
   if(key===25){
    return <img className="imgCashew" src={krugovnik} alt="krugovnik"/>
  }
   if(key===26){
    return <img className="imgCashew" src={persik} alt="persik"/>
  }
   if(key===27){
    return <img className="imgCashew" src={pitahay} alt="pitahay"/>
  }
   if(key===28){
    return <img className="imgCashew" src={rediska} alt="rediska"/>
  }
   if(key===29){
    return <img className="imgCashew" src={patison} alt="patison"/>
  }
   if(key===30){
    return <img className="imgCashew" src={repa} alt="repa"/>
  }
}
  const getInfo = () => {
    if(key === 29){
      const element = document.querySelector('.imgMacaron').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.imgMacaron').style.display = 'block'
      } else {
        document.querySelector('.imgMacaron').style.display = 'none'
      }
    }
  }


  return (
  <div className="App">
  <main>
  <div className="header">
    <div className="TextOfPerson">
      <p className="ConnentOfPerson">{data.contents[key].textPerson}</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
  </div>
  
  <button onClick={getInfo} className='buttonInfo'>
          <div className='wrapImgText'>
            <img className="imgMacaron" src={pattison} alt="pattison"/>
          </div>
        <img className="info" src={info} alt="info"/> 
  </button>
  <button onClick={getToBoss} className='buttonToBoss'>Злая плесень</button>
  {getimg()}
    <div className='wrap'> 
      
      <input 
        id="masswge" 
        placeholder='введите ответ' 
        className='inputAppWords'
        ></input>
      <button onClick={checked} className='buttonOK'>ОК</button>
    </div>
  </main>
  </div>
  )
}
export default QuizText