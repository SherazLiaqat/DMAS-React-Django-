import React from 'react'
import './Earthquakeinfo.css';
import Footer from '../../../components/Footer/Footer';
import Imageslider from '../../Slider/Imageslider';
import downimage from '../../images/down.jpg';
import earthnew from '../../images/earthnew.jpg';
import chair from '../../images/chair.jpg';
import outdoor from '../../images/outside.jpg';
export const Earthquakeinfo = () => {
    return (
        <>
     
       < div className="container">

        <div  className="column right-side">
            <h1 className="title-3">Earthquake Awareness <br/> Preparedness</h1>
            <div className="inc-exp-container">
        <div>
          <h4 className='h1'><i class='fas fa-virus'></i>PREPARING DURING THE PENDAMIC?</h4>
          <p  className="money plus">Please review our guidance on preparing for an earthquake
           while still protecting yourself from COVID-19.</p>
        </div>
        <div>
          <h4 className='h1'><i  class="fa fa-ambulance" ></i>NEED HELP NOW?</h4>
                        
          <p  className="money minus">If you are in immediate need of help, please 
          find an open shelter Having an action plan probability 
          you will make the best decision to prevent injuries. Follow these recommendations during Eartquake.</p>
        </div>
      </div>
            <h4 className="title-4" >“Drop, Cover, Hold”<br/>
            
            </h4>
            <img  src={downimage} className='img'></img>
            
            </div>
            
            <div className="content">
                <div classNamename="text">
                   
    
                
    
                   
                    <h3 className='title-4'> The Recommended Earthquake Protection Method</h3>
                    <div className='paragraph'>
                    <p>In recent years, an E-mail has been circulating that describes the “<b>triangle of life</b>,” an
                        alternative to the long-established “<b>Drop, Cover, and Hold</b>” advise. “Drop, Cover, Hold” is
                        still the official recommendation in the United States by many experts including State Emergency
                        Management, the Red Cross, and the Lewis County Division of Emergency Management.</p>
                    <p>Earthquakes seldom cause complete building collapse in the United States. The greatest danger is from
                        falling or flying objects. The “Drop, Cover, and Hold” technique is designed to provide the greatest
                        protection from this type of situation.</p>
                    <p>The “triangle of life” and some of the other actions recommended in the E-mail may not be the best
                        action to take. Additional information discussing the “triangle of life” is available at: <a
                            href="http://www.earthquakecountry.info/dropcoverholdon/">www.earthquakecountry.info/dropcoverholdon/</a>.
                        Send this information to your loved-ones and anyone that sends you the “triangle of life” E-mail.
                    </p>
                    </div>
    
    
    
                    
                    <p className='title-4'><b>Why Is “Drop, Cover and Hold” Recommended?</b></p>
                    <ul className='paragraph'>
                        <li>The “duck and cover” protection approach was developed to protect occupants from falling
                            hazards, the greatest danger to the U.S. population during an earthquake. Earthquake events
                            result in more injuries from falling hazards (unsecured furniture and building materials), not
                            overall building collapse. The space under a study table or desk is likely to remain. Pictures
                            from around the world show tables and desks standing with rubble all around them. Tables even
                            hold up floors that have collapsed! “Drop, Cover and Hold” under a table increases the chance of
                            ending up in a survivable void space during an earthquake.</li>
                        <li>Trying to move during shaking puts you at risk: Earthquakes occur without any warning and may be
                            so violent that you cannot run or crawl; therefore, you will most likely be knocked to the
                            ground. It is best to “Drop” before the earthquake drops you. Find nearby shelter or use your
                            arms and hands to “Cover” your head and neck. “Hold” on to your shelter and move with it if it
                            shifts. “Drop, Cover, and Hold” gives you the best overall chance of quickly protecting yourself
                            during an earthquake … even during quakes that cause furniture to move about rooms.</li>
                        <li>The greatest danger is from falling and flying objects. You are much more likely to be injured
                            by TVs, lamps, glass, bookcases, etc.</li>
                        <li>Building collapse is less of a danger. Images of collapsed structures in earthquakes get the
                            most attention from the media, but most United States construction requirements prevent
                            buildings from collapse during earthquakes.</li>
                    </ul>
                   
                    
                </div>
            </div>
    
    
    
            
            <h4 className="title-4">Indoors</h4>
    
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <ul>Drop, Cover, Hold” under a sturdy table.</ul>
                        <li>Stay away from windows, objects that could fall.</li>
                        <li><b>Kitchen:</b> Move away from refrigerator, stove, and overhead cabinets.</li>
                    </ul>
                   
                </div>
            </div>
    
            
            
        
            <h4 className="title-4">Outdoors</h4>
            <img  src={outdoor} className='img'></img>
            <div className="content">
                <div className="rich-text">
                    <ul className='paragraph'>
                        <li>Move to a clear area away from trees, signs, building, and electrical wires</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
           
            <h4 className="title-4">Downtown:</h4>
            <div >
                <div >
                    <ul className='paragraph'>
                        <li>Move away from building fronts</li>
                        <li>Protect yourself against falling bricks, glass and other debris</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
            <h4 className="title-4">Crowded Store</h4>
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <li>Do <b>NOT</b> rush from the exits</li>
                        <li>Move away from displace shelves</li>
                        <li><b>&quot;Drop, Cover and Hold&quot;</b></li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
            <h4 className="title-4">Driving</h4>
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <li>Slowly pull over to the side of the road and stop</li>
                        <li>Avoid overpasses, power lines. Stay in the car until the shaking stops</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
           
            <h4 className="title-4"> <i class="fa fa-wheelchair"></i>Wheelchair</h4>
            <img  src={chair} className='img'></img>
            <div clasNAclassNames="content">
                <div >
                    <ul className='paragraph'>
                        <li>Stay in the wheelchair.</li>
                        <li>Move to a safe cover, lock your wheels.</li>
                        <li>Protect your head with your arms (this is the only time you might use a doorway).</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
            <div className="content">
            <h4 className="title-4">Theater or stadium:</h4>
                <div >
                    <ul className='paragraph'>
                        <li>If possible, get under the seat. If not, stay in your seat.</li>
                        <li>“Cover” your head with your arms.</li>
                        <li>Do not attempt to leave until the shaking stops.</li>
                    </ul>
                  
                </div>
            </div>
    
    
            <div className="content">
                <div >
                
                    <p className='paragraph'>Data from three University-based studies performed after the Loma Prieta (September, 1989) and
                        Northridge (January, 1994) earthquakes in California indicated Loma Prieta (63 deaths, approximately
                        3,700 injured) and Northridge (57 deaths, 1500 serious injuries) benefited from “Drop, Cover and
                        Hold”. Most injuries were broken bones from falls or broken-glass cuts to bare feet caused by people
                        rushing to leave their homes. There were millions of people in each of these earthquake-affected
                        areas that reported to have “Dropped, Covered, and Held on” during the shaking of the earthquake.
                    </p>
                    <p className='paragraph'>Methods like standing in a doorway, running outside, and some “triangle of life” techniques may
                        increase injury risk and are not recommended in the United States. Official rescue teams that have
                        searched for trapped people after earthquakes, promote the “Drop, Cover, and Hold” method in the
                        United States. Endorsement of “Drop, Cover, and Hold” is also given by emergency managers,
                        researches, and school safety advocates.</p>
                    
                </div>
            </div>
    
    
    
                 
            <h4 className="title-4">What Rescuers and Experts “DO NOT” Recommend You Do During An Earthquake</h4>
            <div className="content">
                <div className='last-paragraph' >
                    <ul className='paragraph'>
                    
                        <li ><b>DO NOT</b> run outside or to other rooms during shaking. The area near the exterior walls of
                            a building is the most dangerous place to be. Windows, facades and architectural details are
                            often the first parts of the building to collapse. Stay away from the danger zone. Also, shaking
                            can be so strong that you will not be able to move far without falling down.</li>
                        <li><b>DO NOT</b> stand in a doorway. In modern houses, doorways are no stronger than any other part
                            of the house. The doorway does not protect you from the most likely source of injury, falling or
                            flying objects. And, doorways usually only accommodate one person.</li>
                        <li><b>DO NOT</b> get out of your car and lay next to it. This is very dangerous because the car can
                            move and crush you, and other drivers may not see you on the ground.</li>
                    </ul>
    
    
    
                           
                    <p className='paragraph'><b>For the best opportunity to reduce injury risk and improve your chances of survival in an
                            earthquake, practice the following:</b></p>
                    <ul className='paragraph'>
                        <li><b>DROP</b> down onto your hands and knees (before the earthquake knocks you down). This
                            position protects you from falling, but allows you to still move if necessary.</li>
                        <li><b>COVER</b> your head and neck (and your entire body if possible) under a sturdy table or desk.
                            If there is no shelter nearby, get down near an interior wall (or next to low-lying furniture
                            that won’t fall on you), and cover your head and neck with your arms and hands.</li>
                        <li><b>HOLD ON</b> to your shelter (or to your head and neck) until the shaking stops. Be prepared
                            to move with your shelter if the shaking shifts.</li>
                    </ul>
                    <p className='paragraph'><b>Additional preparedness information is available at:</b><a
                            href="http://www.ready.gov">www.Ready.gov</a><br/><br/></p>
                    
                </div>
            </div>
    
        </div>
    
        
        </>
    );
}
export default Earthquakeinfo;