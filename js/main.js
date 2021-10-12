let elAsideBtn = document.querySelector(".aside__btn");
let elAside = document.querySelector(".aside");
let elMain = document.querySelector(".main");

elAsideBtn.addEventListener('click' , function(){
  elAside.classList.toggle('close')
})
elAsideBtn.addEventListener('click' , function(){
  elMain.classList.toggle('open')
})