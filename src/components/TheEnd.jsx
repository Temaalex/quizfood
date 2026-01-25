import Person from '../pictures/Persone.png';
//import winimg from '../pictures/winimg.png'
import data from '../bd.json';



const TheEnd = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor">{data.contents[52].textDoctor}</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    {/* <div className='wrapBox'>
      <img className="winimg" src={winimg}alt="winimg"/>
    </div> */}
  </main>
  )
  
}

export default TheEnd