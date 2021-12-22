import { summ , divide , multiply , subtract}  from './calculate';

import("./index.css");

// import image from './images'

console.log( summ(3,5 ) );
console.log( divide(3,5 ) );
console.log( multiply(3,5 ) );
console.log( subtract(3,5 ) );


const div = document.createElement('div');
div.innerText = "Hello pack";
div.classList.add( 'green');
div.classList.add( 'redColor' );

const div1 = document.createElement('div');
div1.innerText = "Hello pack";
div1.classList.add('blueColor');


// document.createElement("img").src = image;
document.getElementById("root").appendChild( div );
document.getElementById("root1").appendChild(div1);