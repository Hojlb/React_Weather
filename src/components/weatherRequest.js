import React from 'react';

const WeatherRequest = (props) => {
  return (
     <div >
        { props.city &&
          <div className='info'>
            <p>Location: {props.city}, {props.country}</p>
            <p>Temperatyre: {props.temp}</p>
            <p>Sunrise: {props.sunrise}</p>
            <p>Sunset: {props.sunset}</p>
          </div>
        }
        <div className='error'>
          <p>{props.error}</p>
          </div>
         </div>
       );
};


export default WeatherRequest;
