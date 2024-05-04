import React from 'react';
import Background from './compenents/background';
import Foreground from './compenents/foreground';
function App() {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
       < Background/>
       < Foreground/>
    </div>
  )
}

export default App