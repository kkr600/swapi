import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


$(window).scroll(()=>{
  if ($(window).scrollTop() > 200) {
    $(".mainMenu").removeClass("noStick").addClass("stick");
    $("ul.s").addClass("stick")
  }
  else {
    $(".mainMenu").removeClass("stick").addClass("noStick");
    $("ul.s").removeClass("stick")
  }
  // if ($(window).scrollTop() > 274) {
  //   $("section.right").addClass("stick");
  //   $("input.search").addClass("stick");
  // }
  // else {
  //   $("section.right").removeClass("stick")
  //   $("input.search").removeClass("stick")
  // }
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
