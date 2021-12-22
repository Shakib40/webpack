import("./index.css");

import image from './download.png'


const headerDiv = document.createElement('div');
headerDiv.classList.add('header');

let img = document.createElement("img");
img.src = image;

headerDiv.append(img);
document.getElementById("header").appendChild(headerDiv);

