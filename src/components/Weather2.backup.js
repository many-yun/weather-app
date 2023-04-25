import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import weatherDescKo from '../data/weatherKR';
import { getToday, getTime } from '../utils/getDate';
import dfs_xy_conv from '../utils/getXY';

function Weather() {
   const [temp, setTemp] = useState(0);
   const [name, setName] = useState('');
   const [icon, setIcon] = useState('');
   const [description, setDescription] = useState('');

   // PTY = 강수형태 코드값
   // REH = 습도 %
   // RN1 = 1시간 강수량 mm
   // T1H = 기온 °C
   // VEC = 풍향 deg

   const searchWeather = useRef();
   console.log(getTime());

   const API_KEY = process.env.REACT_APP_KEY2;
   function onGeoOK(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const x = dfs_xy_conv('toXY', lat, lon).x;
      const y = dfs_xy_conv('toXY', lat, lon).y;
      axios
         .get(
            `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=99&dataType=JSON&base_date=${getToday()}&base_time=${getTime()}&nx=${x}&ny=${y}`,
         )
         .then((res) => {
            let item = res.data.response.body.items.item;
            console.log(item);
            setTemp(item.find((data) => data.category === 'T1H').obsrValue);
         })

         .catch(function (err) {
            console.log('err!', err);
         });
   }

   function onGeoErr() {
      alert("Can't find");
   }

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
      // searchWeather.current.focus();
   }, []);

   return (
      <WeatherWrapper>
         <p>{temp}°C</p>
         <SearchWeatherWrapper></SearchWeatherWrapper>
      </WeatherWrapper>
   );
}

export default Weather;

const WeatherWrapper = styled.div``;

const SearchWeatherWrapper = styled.div``;
