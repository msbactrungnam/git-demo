import React from 'react';
import dao from './assets/images/dao.jpg';
import './App.css';
import {AppButton} from './button';
import {ReactComponent as IconEdit2} from './logo.svg'

function App_demo() {
  return (
    <div>
      <AppButton></AppButton>
      <img src={dao}/>
      <IconEdit2></IconEdit2>
    </div>
  )
}
export default App_demo;