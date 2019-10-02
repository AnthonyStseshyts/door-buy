"use strict";

const mybutton = document.querySelector("#toTop");
const body = document.body;

mybutton.addEventListener("click", topFunction);
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
