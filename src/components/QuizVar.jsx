import Person from '../pictures/Persone.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import Winound from '../sound/winLvl.mp3'
import info from '../pictures/Info.png'
import macaron from '../pictures/macaron.png'
import cashew from '../pictures/cashew.png'
import ubileinoe from '../pictures/ubileinoe.png'
import osobuy from '../pictures/osobuy.png'

const QuizTwentyOne = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();
const [play] = useSound(Winound);
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
      navigate('/toBoss')
    }      
}



const getTrue = () =>{
      document.querySelector('.buttonInfo').style.display = 'block'
      play()
      localStorage.setItem(key, true)
      toBoss()
}

const checked_1 = () => {
  if(data.contents[key].answer.answer_1[1] === true){ 
    getTrue()  
    const elements = document.querySelectorAll('.button')
    elements[0].style.background = '#2adc2a'
   }else{
     navigate('/0')
   }
}
const checked_2 = () => {
  if(data.contents[key].answer.answer_2[1] === true) {
    getTrue()
    const elements = document.querySelectorAll('.button')
    elements[1].style.background = '#2adc2a'
   }else{
     navigate('/0')
   }
}
const checked_3 = () => {
   if(data.contents[key].answer.answer_3[1] === true) {
      getTrue()
      const elements = document.querySelectorAll('.button')
      elements[2].style.background = '#2adc2a'
    }else{
     navigate('/0')
    }
}
const checked_4 = () => {
  if(data.contents[key].answer.answer_4[1] === true) {
      getTrue()
      const elements = document.querySelectorAll('.button')
      elements[3].style.background = '#2adc2a'
    }else{
     navigate('/0')
    }
  }
  const getInfo = () => {
    if(key !== 1 && key !== 12 && key !== 13){
      const element = document.querySelector('.infoText').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.infoText').style.display = 'block'
      } else {
        document.querySelector('.infoText').style.display = 'none'
      }
    }
    if(key === 1){
      const element = document.querySelector('.infoText').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.imgMacaron').style.display = 'block'
      } else {
        document.querySelector('.imgMacaron').style.display = 'none'
      }
    }
    if(key === 12){
      const element = document.querySelector('.infoText').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.infoText').style.display = 'block'
        document.querySelector('.imgUbileinoe').style.display = 'block'
        document.querySelector('.imgUbileinoe').style.marginTop = '35%'
        document.querySelector('.imgUbileinoe').style.height = '20%'
        document.querySelector('.imgUbileinoe').style.background = '#ffffff'
      } else {
        document.querySelector('.infoText').style.display = 'none'
        document.querySelector('.imgUbileinoe').style.display = 'none'
      }
    }
    if(key === 13){
      const element = document.querySelector('.infoText').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.infoText').style.display = 'block'
        document.querySelector('.imgOsobuy').style.display = 'block'
        document.querySelector('.imgOsobuy').style.marginTop = '35%'
        document.querySelector('.imgOsobuy').style.height = '15%'
        document.querySelector('.imgOsobuy').style.background = '#ffffff'
      } else {
        document.querySelector('.infoText').style.display = 'none'
        document.querySelector('.imgOsobuy').style.display = 'none'
      }
    }
    
  }


function getimg(){
  if(key===9){
    return <img className="imgCashew" src={cashew} alt="cashew"/>
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
      <div className='buttons__content'>
        
        <button onClick={getInfo} className='buttonInfo'>
          <div className='wrapImgText'>
            <div className='infoText'>
                <p className='ConnentOfinfoText'>{data.contents[key].why}</p>  
            </div>
            <img className="imgMacaron" src={macaron} alt="macaron"/>
            <img className="imgUbileinoe" src={ubileinoe} alt="ubileinoe"/>
            <img className="imgOsobuy" src={osobuy} alt="osobuy"/>
          </div>
        <img className="info" src={info} alt="info"/>
         
        </button>
        {getimg()}
        <button onClick={checked_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
				<button onClick={checked_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
				<button onClick={checked_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
				<button onClick={checked_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
      </div>
  </main>
  </div>
  )
}
export default QuizTwentyOne