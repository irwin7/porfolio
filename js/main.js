let elAsideBtn = document.querySelector(".aside__btn");
let elAside = document.querySelector(".aside");
let elMain = document.querySelector(".main");

elAsideBtn.addEventListener('click' , function(){
  elAside.classList.toggle('close')
})
elAsideBtn.addEventListener('click' , function(){
  elAsideBtn.classList.toggle('close')
})
elAsideBtn.addEventListener('click' , function(){
  elMain.classList.toggle('open')
})
// curosor
// let cursor = document.getElementById('cursor');
// document.addEventListener('mousemove', function(e){
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// });
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
  t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll("a"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}

function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}