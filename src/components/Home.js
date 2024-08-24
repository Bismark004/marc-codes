import Card from './Card';
import './Home.css';
import Bismark from '../Assets/Bismark.png';
import TypingEffectComponent from './TypingEffect';
function Home() {
    return(
        <div class='Home'>
         <div className="info">
            <h1>Hi, 
                <br/> I am Bismark 
                <TypingEffectComponent/>

            </h1>
        
               
            
            <div className='info-buttons'>
              <button className='hire-button'>Hire Me </button>
               <button className='resume'>Resume</button>
           </div>
            <Card/>
         </div>
          
          <div className="image">
            <img src={Bismark} alt='marc'/> 
          </div>

        </div>

    )
}
export default Home;