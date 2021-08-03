import './App.css';


import Home from './pages/home';
import GlobalState from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="App"> 
        <Home/>
      </div>
    </GlobalState>
  );
}

export default App;
