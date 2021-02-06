import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'

// pushの練習

const App: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (

    <div className="App">
      <h1>App.tsx</h1>
      <Login id="1" name="maaya" age={28}
        isLive={true} />
      {count}
      <button onClick={handleClick} >count up</button>




    </div>

  );
};

export default App;
