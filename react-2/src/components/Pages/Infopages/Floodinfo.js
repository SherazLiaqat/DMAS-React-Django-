import React from 'react'
import Footer from '../../../components/Footer/Footer';
import './Earthquakeinfo.css';
import safty from '../../images/flood11.jpg';
import safty1 from '../../images/survived.png';
import symbol from '../../images/symbol.png';
import symbol1 from '../../images/relief.png';
import car from '../../images/car.png';
const Floodinfo = () => {
    return (
      <>
       <div className="container ">

    

    <h1 className="title-3">Flood Awareness <br/> Preparedness</h1>
    <img  src={symbol} className='img'></img>
        <p className='paragraph'>Flooding is a temporary overflow of water onto land that is normally dry.
         Floods are the most common natural
        disaster in the United States. Failing to 
        evacuate flooded areas or entering flood waters can lead to injury
        or death. </p>

        
    <p className='title-4'>Floods may:</p>
    <ul className='paragraph'>
        <li>Result from rain, snow, coastal storms, storm surges and overflows of dams and other water systems.</li>
        <li>Develop slowly or quickly. Flash floods can come with no warning.</li>
        <li>Cause outages, disrupt transportation, damage buildings and create landslides.</li>
    </ul>



    
    <p className='paragraph'> <strong>IF YOU ARE UNDER A FLOOD WARNING, FIND SAFE SHELTER RIGHT AWAY</strong></p>
    <ul className='paragraph'>
        <li>
            <p>Do not walk, swim or drive through flood waters<strong>. Turn Around, Don’t Drown!</strong></p>
            <ul>
                <li>
                    <p>Just six inches of moving water can knock you down, and one foot of moving water can sweep
                        your vehicle away.</p>
                </li>
            </ul>
        </li>
        <li>
            <p>Stay off of bridges over fast-moving water.</p>
        </li>
        <li>
            <p>Depending on the type of flooding:</p>
            <ul>
                <li>
                    <p>Evacuate if told to do so.</p>
                </li>
                <li>
                    <p>Move to higher ground or a higher floor.</p>
                </li>
                <li>
                    <p>Stay where you are.</p>
                </li>
            </ul>
        </li>
    </ul>

    <p className='title-4'><strong>HOW TO STAY SAFE WHEN A FLOOD THREATENS</strong></p>
    

    
   
    <h2 className ='title-4'>Prepare Now</h2>
    <img  src={safty} className='img'></img>
    <ul className='paragraph'>
        <li><a href="https://www.ready.gov/plan">Make a plan</a> for your household, including your pets, so that
            you and your family know what to do, where to go, and what you will need to protect yourselves from
            flooding and COVID-19.</li>
        <li><a href="https://www.ready.gov/kit">Build a “Go Kit”</a> of the supplies you will need if you have to
            quickly evacuate your home.</li>
        <li>Know types of flood risk in your area. Visit FEMA’s <a href="https://msc.fema.gov/portal">Flood Map
                Service Center</a> for information.</li>
        <li>Sign up for your community’s warning system. The <a
                href="https://www.fema.gov/emergency-alert-system">Emergency Alert System (EAS)</a> and <a
                href="https://www.noaa.gov/">National Oceanic and Atmospheric Administration (NOAA)</a> Weather
            Radio also provide emergency alerts. Sign up for <a href="https://www.cdc.gov/Other/emailupdates/">email
                updates</a> and follow the <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">latest
                guidelines</a> about coronavirus from the Centers for Disease Control and Prevention (CDC) and your
            local authorities to prevent the spread of COVID-19.</li>
        <li>If flash flooding is a risk in your location monitor potential signs, such as heavy rain.</li>
        <li>Learn and practice evacuation routes, shelter plans, and flash flood response.
            <ul>
                <li>If you live in a storm surge flooding zone or a mandatory hurricane evacuation zone, make plans
                    to stay with family and friends. Evacuate to shelters only if you are unable to stay with family
                    and friends. Check with local authorities to determine which public shelters are open. Review
                    your previous evacuation plan and consider alternative options to maintain social and physical
                    distancing to prevent the spread of COVID-19.</li>
                <li>Don’t forget to include your pet in your emergency plan. Remember that some evacuation shelters
                    <a href="https://www.cdc.gov/disasters/petprotect.html">do not accept pets</a>.</li>
            </ul>
        </li>
        <li>Gather supplies<a>, </a>including non-perishable foods, cleaning supplies, and water for several days,
            in case you must leave immediately or if services are cut off in your area. The CDC recommends having at
            least 3 days’ worth of supplies on hand, including one gallon of water per day for each person and pet.
            If you are able, set aside items like soap, hand sanitizer that contains at least 60 percent alcohol,
            disinfecting wipes, and general household cleaning supplies that you can use to disinfect surfaces you
            touch regularly. After a flood, you may not have access to these supplies for days or even weeks. Keep
            in mind each person’s specific needs, including medication. Don’t forget the needs of pets. Include
            extra batteries and charging devices for phones and other critical equipment.
            <ul>
                <li>Being prepared allows you to avoid unnecessary excursions and to address minor medical issues at
                    home, alleviating the burden on urgent care centers and hospitals.</li>
                <li>Not everyone can afford to respond by stocking up on necessities. If you can, make essential
                    purchases and slowly build up supplies in advance so that you can leave longer time periods
                    between shopping trips. This helps to protect those who are unable to procure essentials in
                    advance of a disaster, like a flood or pandemic, and must shop more frequently. In addition,
                    consider avoiding WIC-approved products so that those who rely on these products can access
                    them.</li>
            </ul>
        </li>
        <li>Purchase or renew a flood insurance policy. Homeowner’s policies do not cover flooding. It typically
            takes up to 30 days for a policy to go into effect so the time to buy is well before a disaster. Get
            flood coverage under the <a href="https://www.fema.gov/national-flood-insurance-program">National Flood
                Insurance Program (NFIP)</a>.<a href="https://www.fema.gov/national-flood-insurance-program"> </a>
        </li>
        <li>Keep important documents in a waterproof container. Create password-protected digital copies.</li>
        <li>Protect your property. Move valuables to higher levels. Declutter drains and gutters. Install check
            valves. Consider a sump pump with a battery.</li>
    </ul>



    
    <h2 className='title-4'>Survive During</h2>
    <img  src={safty1} className='img'></img>
    <ul className='paragraph'>
        <li>Depending on where you are, the potential impact, and the warning time given for flooding, go to the
            safe location that you have identified. If you are not able to shelter in place or with family or
            friends and must go to a public shelter, remember to bring items that can help protect you and others
            from COVID-19, such as hand sanitizer that contains at least 60 percent alcohol, cleaning materials, and
            two cloth masks per person. If you can, wash your face covering regularly. Children under 2 years old,
            people who have trouble breathing, and those who are unable to remove masks on their own should not wear
            them.</li>
        <li>If told to evacuate, do so immediately. Never drive around barricades. Local responders use them to
            safely direct traffic out of flooded areas.</li>
        <li>If you are <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">sick
                and need medical attention</a>, contact your healthcare provider for further care instructions and
            shelter in place, if possible. If you are experiencing a medical emergency, call 9-1-1 and let the
            operator know if you have, or think you might have, COVID-19. If possible, put on a mask before help
            arrives. If staying at a shelter or public facility, alert shelter staff immediately so they can call a
            local hospital or clinic.</li>
        <li>Listen to EAS, NOAA Weather Radio or local alerting systems for current emergency information and
            instructions regarding flooding and COVID-19.</li>
        <li>Do not walk, swim or drive through flood waters. Turn Around. Don’t Drown!</li>
        <li>Stay off bridges over fast-moving water. Fast-moving water can wash bridges away without warning.</li>
       
        </ul>
        
        <h2 className ='title-4'>Vehicle</h2>
        <ul className='paragraph'>
        <li>If your car is trapped in rapidly moving water stay inside. If water is rising inside the car get on the
        roof.</li>
        </ul>
       
        
        <img  src={car} className='img'></img>
        
           <ul className='paragraph'> 
        <li>If trapped in a building go to its highest level. Do not climb into a closed attic. You may become
            trapped by rising floodwater. Only get on the roof if necessary and once there signal for help.</li></ul>
    
    
    



   
    <h2 className ='title-4'>Be Safe After</h2>
    <img  src={symbol1} className='img'></img>
    <div className='paragraph'>
    
        <li>Listen to authorities for information and instructions. Return home only when authorities say it is
            safe.</li>
        <li>Avoid driving except in emergencies.</li>
        <li>Be aware that snakes and other animals may be in your house. Wear heavy work gloves, protective
            clothing, and boots during clean up. Wear a mask and maintain a physical distance of at least six feet
            while working with someone else. Use an appropriate mask if cleaning <a
                href="https://www.cdc.gov/mold/cleanup-guide.html">mold or other debris.</a> People with <a
                href="https://www.cdc.gov/disasters/clinicians_asthma.html">asthma and other lung conditions and/or
                immune suppression</a> should not enter buildings with indoor water leaks or mold growth that can be
            seen or smelled. Children should not take part in disaster cleanup work.</li>
        <li>Be aware of the risk of electrocution. Do not touch electrical equipment if it is wet or if you are
            standing in water. If it is safe to do so, turn off the electricity to prevent electric shock.</li>
        <li>Avoid wading in floodwater, which can be contaminated and contain dangerous debris. Underground or
            downed power lines can also electrically charge the water. There is no evidence that COVID-19 can be
            transmitted through water; however, you should avoid contact with floodwaters.</li>
        <li>Continue taking steps to protect yourself from COVID-19 and other infectious diseases, such as washing
            your hands often and cleaning commonly touched surfaces with disinfecting products.</li>
        <li>Use a generator or other gasoline-powered machinery ONLY outdoors and away from windows.</li>
        <li>Engage virtually with your community through video and phone calls. Know that it’s normal to feel
            anxious or stressed. Take care of your body and talk to someone if you are feeling upset. Many people
            may already feel fear and anxiety about the coronavirus 2019 (COVID-19). The threat of a flood can add
            additional stress. Follow CDC guidance for managing stress during a traumatic event and <a
                href="https://www.cdc.gov/injury/features/dealing-with-stress/index.html">managing stress during
                COVID-19</a>. </li><br/>



</div>



</div>
       </>
    )
}

export default Floodinfo
