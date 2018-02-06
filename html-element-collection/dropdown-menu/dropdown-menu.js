'use strict';
const menu = document.getElementsByClassName('wrapper-dropdown');
 
 for (let item of menu) {
   item.onclick = () => {
     item.classList.toggle('active');
   };
 }