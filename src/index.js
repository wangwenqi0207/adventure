import './main.css'
import './main.less'

import React from 'react'
import ReactDOM from 'react-dom'

import One from './pages/One'




ReactDOM.render(
  <One/>
  , document.getElementById("root"))


  
const a = 1;
console.log(a);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('执行完毕');
    resolve();
  }, 1000);
});
console.log(promise);

