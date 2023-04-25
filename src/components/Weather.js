import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import weatherDescKo from '../data/weatherKR';

function Weather() {
   const [temp, setTemp] = useState(0);
   const [name, setName] = useState('');
   const [icon, setIcon] = useState('');
   const [description, setDescription] = useState('');

   const searchWeather = useRef();

   const API_KEY = process.env.REACT_APP_KEY;
   function onGeoOK(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      axios
         .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
         .then((res) => {
            // console.log(res.data);
            setTemp(res.data.main.temp);
            setName(res.data.name);
            setDescription(
               weatherDescKo.find((data) => data[`${res.data.weather[0].id}`])[`${res.data.weather[0].id}`],
            );
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
         })

         .catch(function (err) {
            console.log(err);
         });
   }

   function onGeoErr() {
      alert("Can't find");
   }

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
      searchWeather.current.focus();
   }, []);

   return (
      <WeatherWrapper>
         <p>{temp}°C</p>
         <p>{name}</p>
         <img src={icon} />
         <p>{description}</p>
         <SearchWeatherWrapper>
            <input type="text" ref={searchWeather} />
            <button>Search</button>
         </SearchWeatherWrapper>
      </WeatherWrapper>
   );
}

export default Weather;

const WeatherWrapper = styled.div``;

const SearchWeatherWrapper = styled.div``;
