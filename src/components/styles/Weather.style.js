import styled from 'styled-components';
import windowDrawing from '../../assets/window-drawing.png';

export const HamburgerBtn = styled.div`
   width: 30px;
   height: 25px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   cursor: pointer;

   & > div {
      width: 100%;
      height: 3px;
      background-color: #999;
   }
`;

export const BookmarkList = styled.div`
   width: 500px;
   height: 400px;
   overflow-y: scroll;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
   border-radius: 10px;
   position: absolute;
   left: 30px;
   top: 65px;
   background-color: white;
   padding: 30px;
   text-align: left;
   font-size: 1.3rem;

   & > p {
      margin-bottom: 20px;

      & > svg {
         color: #ebc22a;
         margin-bottom: -2px;
      }
   }

   & div {
      border: 2px solid #ccc;
      display: inline-block;
      padding: 10px;
      border-radius: 30px;
      cursor: pointer;
      margin: 0 10px 10px 0;
      font-size: 1.1rem;

      &:hover {
         background-color: #eee;
      }
   }
`;

export const Star = styled.div`
   position: absolute;
   right: 30px;
   top: 30px;
   width: 35px;
   height: 35px;

   & svg {
      width: 100%;
      height: 100%;
      color: #aaa;
      cursor: pointer;
      transition: 0.1s;

      &:hover {
         color: #ebc22a;
         width: 120%;
         height: 120%;
         margin: -10% 0 0 -10%;
      }
      &:active {
         margin: 5% 0 0 5%;
         width: 90%;
         height: 90%;
      }
   }
`;

export const WeatherWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 1200px;
   margin: -100px auto 0 auto;

   @media screen and (max-width: 1280px) {
      width: 1000px;
   }

   & > div {
      width: 50%;
   }
`;

export const WeatherInfoWrapper = styled.div`
   background-color: rgba(255, 255, 255, 0.5);
   border-radius: 20px;
   margin: 0 auto;
   padding: 30px;
   // box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
   position: relative;
`;

export const WeatherImageWrapper = styled.div`
   height: 600px;
   position: relative;

   @media screen and (max-width: 1280px) {
      height: 500px;
   }

   & > div {
      position: absolute;
   }
`;

export const WeatherImage = styled.div`
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

   @media screen and (max-width: 1280px) {
      width: 256px;
      height: 280px;

      & {
         left: 127px;
         top: 100px;
      }
   }
`;

export const WindowImage = styled.div`
   width: 100%;
   height: 100%;
   background: url(${windowDrawing});
   background-size: cover;
   left: 0;
   top: 0;
`;

export const WeatherLocation = styled.p`
   font-weight: bold;
   background-color: #eee;
   border-radius: 20px;
   padding: 10px 30px;
   display: inline-block;
   margin: 0 auto;
   color: #777;
   font-size: 1rem;

   & svg {
      color: #999;
   }
`;

export const WeatherT1h = styled.p`
   font-size: 3.5rem;
   padding-top: 40px;

   & svg {
      height: 40px;
      margin: 0 5px 5px 0;
      color: #d93e3e;
   }
`;

export const PtyRehRn1Wrapper = styled.div`
   padding: 40px 0;
   font-size: 1.2rem;
   color: #333;

   & > p {
      width: calc(33.333% - 2px);
      display: inline-block;
      padding: 10px 0;
   }
`;

export const WeatherPty = styled.p`
   border-right: 1px solid #ccc;

   & svg {
      color: #e77d40;
   }
`;

export const WeatherReh = styled.p`
   border-right: 1px solid #ccc;
   & svg {
      color: #75c6e7;
   }
`;

export const WeatherRn1 = styled.p`
   & svg {
      color: #777;
   }
`;

export const WeatherTime = styled.p`
   color: #999;
`;
