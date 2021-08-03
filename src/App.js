
import React from 'react';
import './styles/background.css';

import Home from './pages/home';
import GlobalState from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
        <div className="app">
          <Home/>
        </div>
    </GlobalState>
  );
}

export default App;
