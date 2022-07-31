import React from 'react'
import './App.css';
import Stopwatch from './components/Stopwatch'


function App() {
  const [user, setUser] = React.useState(null)
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
