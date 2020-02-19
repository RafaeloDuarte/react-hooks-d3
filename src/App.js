import React from 'react';
//import First from './components/First';
//import Second from './components/Second';
//import Third from './components/Third';
//import Fourth from './components/Fourth';
import Sixth from './components/Sixth';

function App() {
  return (
    <>
      <Sixth data={data} />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
    </>
  )
}

export default App;