import React from 'react'
import CardItem from '../../Card/CardItems';
const Estimation = () => {
    return (
        
          <ul className='cards__items'>
        <div>
             <CardItem
            path='/Earthquakeinfo'  
            
              src='images/img-11.jpg'
              text='Click here for Earthquake Estimation....'
              label='Earthquake'

              target="_blank"

              
              

              to={{pathname: '/Blog'}}
              path='/Earthquakeinfo'

            />
            <CardItem
              src='images/flood.jpg'
              text='Click here for Flood Estimation....'
              

              label='Flood'              
              path='/Floodinfo'
              label='Flood'
              path='/Blog'

              target="_blank"

            />
            
        </div>
        </ul>
    )
}

export default Estimation
