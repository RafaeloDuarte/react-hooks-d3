import React from 'react';

//import First from './components/First';
//import Second from './components/Second';
//import Third from './components/Third';
//import Fourth from './components/Fourth';
//import Sixth from './components/Sixth';
//import ChartComponent from './components/ChartComponent'
//import HierarchicalBar from '../src/components/HierarchicalBar'
//import ReduxTeste from './components/ReduxTeste';
import HookReduxBarChart from '../src/components/HookReduxBarChart'
import { Provider } from 'react-redux';
import store from './reducers'

function App() {

  return (
    <Provider store={store}>
      <HookReduxBarChart/>
    </Provider>
  )
}

export default App;