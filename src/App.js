import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';
import WeatherRequest from './components/weatherRequest';
import './App.css';

const API_KEY = '2037320e1b85ef2fdbd690914af4a3c3';
// let urlRequest = 'https://samples.openweathermap.org/data/2.5/weather';
// let options = {
//   q: 'London,uk',
//   appid: API_KEY
// };

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (evnt) => {
    evnt.preventDefault();
    let city = evnt.target.elements.city.value;

    if( city ){
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);﻿
      const data = await api_url.json();

      console.log(data);

      this.setState({
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        city: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].description,
        wind: data.wind.speed,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please, type a city"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
            <div className='row'>
              <div className='col-sm-5 info'><Info /></div>
              <div className='col-sm-7 form'>
              <Form weather={this.gettingWeather}/>
              <WeatherRequest
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
