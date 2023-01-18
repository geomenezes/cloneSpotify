import './assets/css/App.css';
import Playbar from'./Playbar';
import Library from'./Library';
import Gallery from'./Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
        <Library />
        <Playbar />
      </header>
    </div>
  );
}

export default App;
