import './App.css';
import Weather from './components/Weather';
import WeeklyWeather from './components/WeeklyWeather';
import SearchMap from './components/SearchMap';

function App() {
   return (
      <div className="App">
         <Weather />
         {/* <WeeklyWeather /> */}
         {/* <SearchMap /> */}
      </div>
   );
}

export default App;
