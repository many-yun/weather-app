# Weather-web-app
![Honeycam 2023-04-29 02-09-16](https://user-images.githubusercontent.com/92010078/235282240-ad4fcc07-8180-425b-add4-2d202aae4a1e.gif)

> 기상청 open API를 기반으로 제작된 날씨 웹 어플리케이션입니다. </br>
> Openweather의 API를 사용하다가, 한글화 작업을 위해 기상청 초단기예보/초단기실황 API로 변경하였습니다.</br>
> 주소-좌표 변환 자료는 카카오 로컬 API를 사용하였습니다.

## 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

</div>
<br>

## 설치 및 실행
```
& git clone https://github.com/many-yun/weather-app.git
& npm i
& npm start
```

## 주요 기능
### 1. 현재 위치 추적
- 현재 사용자의 위치를 위경도로 추적합니다. 받아온 위경도를 좌표로 반환 후 해당 좌표의 날씨 정보를 얻어옵니다.
### 2. 주소 검색
- 날씨 정보를 얻고자 하는 곳의 주소를 검색할 수 있습니다.
- 주소 검색 > 해당 주소의 위경도값 접근 (카카오 로컬 API) > 위경도 값 좌표값으로 전환 > 좌표값을 통해 해당 지역 날씨 정보 취득 (기상청 초단기실황 API)
### 3. 지역 즐겨찾기
- 화면에 보여지는 지역을 우측 상단의 별모양 아이콘을 클릭하여 즐겨찾기 추가/해제를 할 수 있습니다. 즐겨찾기 된 목록은 좌측 상단의 햄버거 버튼을 눌러 볼 수 있습니다.
- 즐겨찾기 목록에서 등록된 지역 클릭 시 바로 해당 지역의 날씨로 화면이 변경됩니다.
### 4. 날씨/시간에 따라 창문 이미지 변경
- 창문 내의 이미지가 (아침/오후/밤/새벽) * (맑음/비/눈) 각 시간과 날씨에 따라 총 12가지의 이미지로 변경됩니다.

## 그 외
- 화면에 랜더링되는 지역 주소와 날씨 정보와 즐겨찾기 목록을 위해 리덕스로 상태관리를 하였습니다. 
- 리덕스를 사용한 두 번째 프로젝트를 진행하며 처음으로 여러개의 state를 사용하게 되었습니다. createStore를 사용하기 전 reducer를 combineReducers으로 묶어 여러개의 reducer를 사용하였습니다.

## 아쉬운 점
- 현재 위치 좌표를 redux의 초기값으로 지정할수가 없어 검색해보니 redux thunk를 사용하라는 답변을 보았지만, 직접 적용하지는 못하고 데이터가 들어오지 않은 상황에서 처음 dispatch를 한 번 해주는 형식으로 매꾸게 되었습니다. 다음 기회가 된다면 redux thunk를 사용해보고 싶습니다.
