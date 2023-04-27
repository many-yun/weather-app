// import axios from 'axios';
// import { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import weatherDescKo from '../data/weatherKR';
// import { getToday } from '../utils/getDate';
// import dfs_xy_conv from '../utils/getXY';
// import getWeeklySky from '../utils/getWeeklySky';

// function Weather() {
//    const [temp, setTemp] = useState(0);
//    const [state, setState] = useState('');
//    const [humidity, setHumidity] = useState(0);
//    // const [name, setName] = useState('');
//    // const [icon, setIcon] = useState('');
//    // const [description, setDescription] = useState('');

//    // TMP = 1시간 기온°C
//    // SKY = 하늘상태 1맑음 3구름많음 4흐림
//    // PTY = 강수형태 0없음 1비 2비,눈 3눈 5빗방울 6빗방울눈날림 7눈날림
//    // POP = 강수확률 %
//    // PCP = 1시간 강수량 mm 강수없음 or 숫자
//    // REH = 습도 %
//    // SNO = 1시간 신적설 cm 적설없음 or 숫자

//    const searchWeather = useRef();

//    const API_KEY = process.env.REACT_APP_KEY2;
//    function onGeoOK(position) {
//       // console.log(getToday());
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
//       const x = dfs_xy_conv('toXY', lat, lon).x;
//       const y = dfs_xy_conv('toXY', lat, lon).y;
//       axios
//          .get(
//             `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=99&dataType=JSON&base_date=${
//                getToday().day
//             }&base_time=${getToday().time}&nx=${x}&ny=${y}`,
//          )
//          .then((res) => {
//             let item = res.data.response.body.items.item;
//             console.log(item.find((data) => data.category === 'SKY').fcstValue);
//             setTemp(item.find((data) => data.category === 'T1H').fcstValue);
//             setHumidity(item.find((data) => data.category === 'REH').fcstValue);
//             // fastvalue가 number가 아니라 string..
//             setState(getWeeklySky(item));
//          })

//          .catch(function (err) {
//             console.log('err!', err);
//          });
//    }

//    function onGeoErr() {
//       alert("Can't find");
//    }

//    useEffect(() => {
//       navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
//       // searchWeather.current.focus();
//    }, []);

//    return (
//       <WeatherWrapper>
//          <p>온도 {temp}°C</p>
//          <p>습도 {humidity}%</p>
//          <p>{state}</p>
//          <SearchWeatherWrapper></SearchWeatherWrapper>
//       </WeatherWrapper>
//    );
// }

// export default Weather;

// const WeatherWrapper = styled.div``;

// const SearchWeatherWrapper = styled.div``;
