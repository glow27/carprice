import React from 'react';
import './App.scss';
import Clock from './clock';
import Bottom from './bottom';
import Icons from './icons';

function App() {
  return (
    <div className="main">
      <Clock />
      <Icons />
      <Bottom />
    </div>
  );
}

export default App;
