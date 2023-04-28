import axios from 'axios';
import { useState, useEffect } from 'react';
import { getToday } from '../utils/getDate';
import dfs_xy_conv from '../utils/getXY';
import getNowSky from '../utils/getNowSky';
import changeWeaherImage from '../utils/changeWeatherImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faLocationDot,
   faDroplet,
   faCloudRain,
   faCloudSun,
   faTemperatureThreeQuarters,
   faStar,
} from '@fortawesome/free-solid-svg-icons';
import SearchMap from './SearchMap';
import { useSelector, useDispatch } from 'react-redux';
import { setXY, addBookmark, delBookmark } from '../commons/actions';
import store from '../commons/store';
import * as S from './styles/Weather.style';

function Weather() {
   const [t1h, setT1h] = useState(0); // 기온 °C
   const [pty, setPty] = useState(''); // 강수형태
   const [reh, setReh] = useState(''); // 습도 %
   const [rn1, setRn1] = useState(''); // 1시간 강수량 mm
   const [url, setUrl] = useState(''); // 이미지 url
   const [bookmarkToggle, setBookmarkToggle] = useState('none');
   const newX = dfs_xy_conv(
      'toXY',
      useSelector((state) => state.reducer.x),
      useSelector((state) => state.reducer.y),
   ).x;
   const newY = dfs_xy_conv(
      'toXY',
      useSelector((state) => state.reducer.x),
      useSelector((state) => state.reducer.y),
   ).y;

   const dispatch = useDispatch();

   const API_KEY = process.env.REACT_APP_KEY2;
   const API_KEY2 = process.env.REACT_APP_KAKAO;
   function onGeoOK(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // 첫 렌더링
      if (pty === '') {
         dispatch(setXY(lat, lon, ''));
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

            // 좌표 > 주소 변환 검색
            const res2 =
               newX !== undefined &&
               (await axios.get(
                  `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
                  {
                     params: {},
                     headers: {
                        Authorization: `KakaoAK ${API_KEY2}`,
                     },
                  },
               ));
            let item2 = res2.data.documents[0].address;

            if (lat === store.getState().reducer.x) {
               dispatch(
                  setXY(
                     lat,
                     lon,
                     `${item2.region_1depth_name} ${item2.region_2depth_name} ${item2.region_3depth_name}`,
                  ),
               );
            }
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
   }, [store.getState().reducer.x]);

   const onClickBookmark = () => {
      const nowX = store.getState().reducer.x;
      const nowY = store.getState().reducer.y;
      const nowLocation = store.getState().reducer.location;
      const bookmarkLocatoin = store.getState().reducer2.bookmarks;

      const bookmark = {
         x: nowX,
         y: nowY,
         location: nowLocation,
      };
      if (bookmarkLocatoin.find((item) => item.location === nowLocation) === undefined) {
         pty !== '' && dispatch(addBookmark(bookmark));
      } else {
         pty !== '' && dispatch(delBookmark(nowLocation));
      }
   };

   return (
      <S.WeatherWrapper>
         <S.WeatherInfoWrapper>
            <S.HamburgerBtn
               onClick={() => {
                  bookmarkToggle === 'none' ? setBookmarkToggle('block') : setBookmarkToggle('none');
               }}>
               <div></div>
               <div style={{ width: bookmarkToggle === 'none' ? '100%' : '50%' }}></div>
               <div></div>
            </S.HamburgerBtn>
            <S.WeatherLocation>
               <FontAwesomeIcon icon={faLocationDot} />{' '}
               {useSelector(
                  (state) =>
                     state.reducer.location !== undefined && state.reducer.location !== '' && state.reducer.location,
               )}
            </S.WeatherLocation>
            <S.WeatherT1h>
               <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
               {t1h}°C
            </S.WeatherT1h>
            <S.PtyRehRn1Wrapper>
               <S.WeatherPty>
                  <FontAwesomeIcon icon={faCloudSun} /> {pty}
               </S.WeatherPty>
               <S.WeatherReh>
                  <FontAwesomeIcon icon={faDroplet} /> 습도 {reh}%
               </S.WeatherReh>
               <S.WeatherRn1>
                  <FontAwesomeIcon icon={faCloudRain} /> 강수량 {rn1}mm
               </S.WeatherRn1>
            </S.PtyRehRn1Wrapper>
            <S.WeatherTime>{getToday().refTime}:00 기준 / 자료제공 : 기상청</S.WeatherTime>
            <SearchMap />
            <S.Star onClick={onClickBookmark}>
               <FontAwesomeIcon
                  icon={faStar}
                  style={{
                     color:
                        useSelector((state) => state.reducer2.bookmarks).find(
                           (item) => item.location === store.getState().reducer.location,
                        ) === undefined
                           ? '#aaa'
                           : '#ebc22a',
                  }}
               />
            </S.Star>
            <S.BookmarkList style={{ display: bookmarkToggle }}>
               <p>
                  <FontAwesomeIcon icon={faStar} /> 즐겨찾는 지역
               </p>
               {useSelector((state) =>
                  state.reducer2.bookmarks.map((item, index) => (
                     <div
                        key={index}
                        onClick={() => {
                           bookmarkToggle === 'none' ? setBookmarkToggle('block') : setBookmarkToggle('none');
                           dispatch(setXY(item.x, item.y, item.location));
                        }}>
                        {item.location}
                     </div>
                  )),
               )}
            </S.BookmarkList>
         </S.WeatherInfoWrapper>
         <S.WeatherImageWrapper>
            <S.WeatherImage style={{ backgroundImage: `${url}` }}></S.WeatherImage>
            <S.WindowImage></S.WindowImage>
         </S.WeatherImageWrapper>
      </S.WeatherWrapper>
   );
}

export default Weather;
