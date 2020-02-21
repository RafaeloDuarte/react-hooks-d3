import React from 'react';

//import First from './components/First';
//import Second from './components/Second';
//import Third from './components/Third';
//import Fourth from './components/Fourth';
//import Sixth from './components/Sixth';
//import ChartComponent from './components/ChartComponent'
import HierarchicalBar from '../src/components/HierarchicalBar'
import { dados } from '../src/config/mock'

function App() {

  return (
    <>
      <HierarchicalBar dados={dados}/>
    </>
  )
}

export default App;