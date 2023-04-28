import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setXY } from '../commons/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchMap() {
   const API_KEY = process.env.REACT_APP_KAKAO;
   const searchWeather = useRef();
   const searchLocation = useRef();
   const [value, setValue] = useState('');
   const [searchResults, setSearchResults] = useState([]);

   const dispatch = useDispatch();

   const getGeoData = async () => {
      try {
         const res =
            value !== '' &&
            (await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${value}`, {
               params: {},
               headers: {
                  Authorization: `KakaoAK ${API_KEY}`,
               },
            }));
         let datas = res.data.documents;
         value !== '' && setSearchResults(datas);
      } catch (err) {
         value !== '' && console.log(err);
      }
   };

   useEffect(() => {
      getGeoData();
      searchWeather.current.focus();
      // console.log(searchResults);
   }, [value]);

   const onChange = (e) => {
      setValue(e.target.value);
   };

   const onClick = (e) => {
      setValue('');
      dispatch(setXY(Number(e.target.dataset.y), Number(e.target.dataset.x), e.target.dataset.location));
      searchLocation.current.style = 'display:none';
   };

   return (
      <SearchWeatherWrapper>
         <SearchLocationWrapper>
            <input
               type="text"
               ref={searchWeather}
               placeholder={'지역명을 검색하세요'}
               value={value}
               onChange={onChange}
            />
            <button>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </SearchLocationWrapper>
         <SearchLocations style={{ display: `${searchResults.length !== 0 ? 'block' : 'none'}` }} ref={searchLocation}>
            {searchResults &&
               searchResults.map((data, index) => (
                  <p key={index} onClick={onClick} data-x={data.x} data-y={data.y} data-location={data.address_name}>
                     {data.address_name}
                  </p>
               ))}
         </SearchLocations>
      </SearchWeatherWrapper>
   );
}

export default SearchMap;

const SearchWeatherWrapper = styled.div`
   margin-top: 30px;
   position: relative;

   & > div {
      margin: 0 auto;
   }
`;

const SearchLocationWrapper = styled.div`
   display: flex;
   align-item: center;
   width: 100%;

   & input {
      height: 50px;
      border: 2px solid #ccc;
      border-right: none;
      border-radius: 25px 0 0 25px;
      width: calc(100% - 50px);
      padding: 0 10px;

      &:focus {
         outline: none;
      }
   }

   & button {
      height: 50px;
      width: 50px;
      border: none;
      background-color: #333;
      color: white;
      border-radius: 0 25px 25px 0;

      & svg {
         width: 20px;
         height: 20px;
         margin-left: -3px;
      }
   }
`;

const SearchLocations = styled.div`
   width: calc(100% - 75px);
   border: 1px solid #ccc;
   max-height: 200px;
   position: absolute;
   left: 25px;
   top: 50px;
   text-align: left;
   overflow-y: scroll;

   & > p {
      padding: 15px 10px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
   }

   & > p:hover {
      background-color: #f3f3f3;
   }
`;
