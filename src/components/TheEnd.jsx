import Person from '../pictures/Persone.png';
import winimg from '../pictures/boss2.png'
import data from '../bd.json';



const TheEnd = () => {
  localStorage.clear()
  return (
    <main>
      <div className="header">
      <div className="TextOfPerson">
        <p className="ConnentOfPerson">{data.contents[42].textPerson}</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    <div className='wrapBox'>
      <img className="winimg" src={winimg}alt="winimg"/>
    </div>
  </main>
  )
  
}

export default TheEnd