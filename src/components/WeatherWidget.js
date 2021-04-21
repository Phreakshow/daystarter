import React,{useState} from "react";
import "../App.css"
import {TiWeatherCloudy,TiWeatherDownpour,TiWeatherShower,TiWeatherSnow,TiWeatherStormy,TiWeatherSunny,TiWeatherWindyCloudy} from "react-icons/ti";


const api = {
  key: "2c9c927605d1adfe1e672a211821ffbf",
  base: "https://api.openweathermap.org/data/2.5/",
}

function WeatherWidget() {

  const[query,setQuery] = useState("");
  const[weather,setWeather] = useState({});
  

  const search = evt =>{
    if(evt.key ==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
    }
  }


  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };
  
    const getWeatherIcon = (rangeId) =>{
      let icon = null;
    switch(true){
      case rangeId>=200 && rangeId <= 232:
        icon = <TiWeatherStormy />;
        break;
        case rangeId>=300 && rangeId <= 321:
        icon = <TiWeatherShower />;
        break;
        case rangeId>=500 && rangeId <= 531:
        icon = <TiWeatherDownpour />;
        break;
        case rangeId>=600 && rangeId <= 622:
        icon = <TiWeatherSnow />;
        break;
        case rangeId>=700 && rangeId <= 781:
        icon = <TiWeatherWindyCloudy />;
        break;
        case rangeId===800:
        icon = <TiWeatherSunny/>;
        break;
        case rangeId>=801 && rangeId <= 804:
        icon = <TiWeatherCloudy/>;
        break;
        default:
          icon = <TiWeatherCloudy/>;
    }
    return icon;
  };

  return (
    <div>
      <main >
        <div>
        <h3 className="checkTheWeather"> Check The Weather!</h3>
          <input 
            type="text"
            className="search-bar"
            placeholder="e.g. Sofia"
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div className="weather-widget">
          <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weatherIcon"></div>
          <div className="weather">{getWeatherIcon(weather.weather[0].id)} {weather.weather[0].main}</div>
        </div>
          </div>
        ) : ("")}
         
      </main>
    </div>
  );
}

export default WeatherWidget;
