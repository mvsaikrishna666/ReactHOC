import './App.css';
import Clickcounter from './Components/Clickcounter'
import Hovercounter from './Components/Hovercounter'
function App() {
  return (
    <div className="App">
     <Clickcounter username="Hello123"/>
     <Hovercounter username="Hello456"/>
    </div>
  );
}

export default App;
