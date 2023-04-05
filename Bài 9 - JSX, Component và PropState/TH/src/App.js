import React from 'react';
import './App.css';

import App_BT1 from "./BT1/App";
import App_BT2 from "./BT2/App";
import App_TH1 from "./TH1/App"
import App_TH2 from './TH2/App';
import App_TH3 from './TH3/App';
import App_TH4 from './TH4/App';

function App() {

  return (
      <div>
      <App_BT1></App_BT1>
      ///////////////////////////////////
      <App_BT2></App_BT2>
      ///////////////////////////////////
      <App_TH1></App_TH1>
      ///////////////////////////////////
      <App_TH2></App_TH2>
      ///////////////////////////////////
      <App_TH3></App_TH3>
      ///////////////////////////////////
      <App_TH4></App_TH4>
      </div>
  );
}

export default App;