import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getToday } from '../utils/getDate';
import dfs_xy_conv from '../utils/getXY';
import getNowSky from '../utils/getNowSky';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDroplet, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import windowDrawing from '../assets/window-drawing.png';
import changeWeaherImage from '../utils/changeWeatherImage';
import SearchMap from './SearchMap';
import { useSelector } from 'react-redux';
import { setXY } from '../commons/actions';
import { useDispatch } from 'react-redux';
import store from '../commons/store';

function Weather() {
   const [t1h, setT1h] = useState(0); // 기온
   const [pty, setPty] = useState(''); // 강수형태
   const [reh, setReh] = useState(''); // 습도
   const [rn1, setRn1] = useState(''); // 습도
   const [url, setUrl] = useState(''); // 이미지 url
   const newX = dfs_xy_conv(
      'toXY',
      useSelector((state) => state.x),
      useSelector((state) => state.y),
   ).x;
   const newY = dfs_xy_conv(
      'toXY',
      useSelector((state) => state.x),
      useSelector((state) => state.y),
   ).y;

   // T1H = 기온 °C
   // PTY = 강수형태 코드값
   // REH = 습도 %
   // RN1 = 1시간 강수량 mm

   // VEC = 풍향 deg
   const dispatch = useDispatch();

   const API_KEY = process.env.REACT_APP_KEY2;
   function onGeoOK(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const x = dfs_xy_conv('toXY', lat, lon).x;
      const y = dfs_xy_conv('toXY', lat, lon).y;

      if (pty === '') {
         dispatch(setXY(lat, lon, '진접읍'));
      }

      const getWeather = async () => {
         try {
            const res =
               newX !== undefined &&
               (await axios.get(
                  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&dataType=JSON&base_date=${
                     getToday().day
                  }&base_time=${getToday().time}&nx=${newX}&ny=${newY}`,
               ));
            let item = res.data.response.body.items.item;
            setUrl(changeWeaherImage(item));
            setPty(getNowSky(item));
            setT1h(item.find((data) => data.category === 'T1H').obsrValue);
            setReh(item.find((data) => data.category === 'REH').obsrValue);
            setRn1(item.find((data) => data.category === 'RN1').obsrValue);
         } catch (err) {
            console.log(err);
         }
      };
      getWeather();
   }

   function onGeoErr() {
      alert("Can't find");
   }

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
   }, [store.getState()]);

   return (
      <WeatherWrapper>
         <WeatherInfoWrapper>
            <WeatherLocation>
               <FontAwesomeIcon icon={faLocationDot} />{' '}
               {useSelector((state) => state.location !== undefined && state.location)}
            </WeatherLocation>
            <WeatherT1h>{t1h}°C</WeatherT1h>
            <WeatherState>{pty}</WeatherState>
            <RehRn1Wrapper>
               <WeatherReh>
                  <FontAwesomeIcon icon={faDroplet} /> 습도 {reh}%
               </WeatherReh>
               <WeatherRn1>
                  <FontAwesomeIcon icon={faCloudRain} /> 1시간 강수량 {rn1}mm
               </WeatherRn1>
            </RehRn1Wrapper>
            <WeatherTime>{getToday().refTime}:00 기준</WeatherTime>
            <SearchMap />
         </WeatherInfoWrapper>
         <WeatherImageWrapper>
            <WeatherImage style={{ backgroundImage: `${url}` }}></WeatherImage>
            <WindowImage></WindowImage>
         </WeatherImageWrapper>
      </WeatherWrapper>
   );
}

export default Weather;

const WeatherWrapper = styled.div`
   display: flex;
   align-items: center;
   max-width: 1200px;
   margin: 0 auto;

   & > div {
      width: 50%;
   }
`;

const WeatherInfoWrapper = styled.div`
   background-color: rgba(255, 255, 255, 0.5);
   border-radius: 20px;
   width: 600px;
   margin: 0 auto;
   padding: 30px;
`;

const WeatherImageWrapper = styled.div`
   width: 600px;
   height: 600px;
   position: relative;

   & > div {
      position: absolute;
   }
`;

const WeatherImage = styled.div`
   width: 286px;
   height: 320px;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;

   & {
      left: 157px;
      top: 130px;
      background-color: rgba(0, 0, 0, 0.5);
   }
`;

const WindowImage = styled.div`
   width: 100%;
   height: 100%;
   background: url(${windowDrawing});
   left: 0;
   top: 0;
`;

const WeatherLocation = styled.p`
   font-weight: bold;
`;

const WeatherT1h = styled.p`
   font-size: 3.5rem;
   padding: 30px;
`;

const WeatherState = styled.p``;

const RehRn1Wrapper = styled.div`
   padding: 30px 0;
   & > p {
      width: calc(50% - 1px);
      display: inline-block;
   }
`;

const WeatherReh = styled.p`
   border-right: 1px solid #ccc;
`;

const WeatherRn1 = styled.p``;

const WeatherTime = styled.p`
   color: #999;
`;
