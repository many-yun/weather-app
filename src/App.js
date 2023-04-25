import './App.css';
import Weather from './components/Weather';
import Weather2 from './components/Weather2';
import SearchMap from './components/SearchMap';

function App() {
   return (
      <div className="App">
         {/* <Weather /> */}
         <Weather2 />
         <SearchMap />
      </div>
   );
}

export default App;
