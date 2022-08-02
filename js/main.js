var elHeader = document.querySelector(".site-header__nav");
var elBtn = document.querySelector(".site-header__btn");

elBtn.addEventListener("click" , function(){
  elHeader.classList.toggle("site-header__nav--active")
})