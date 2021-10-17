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

var typed = new Typed('.wrapper', {
  strings:['Student','Developer' , 'Designer' , 'Ravshan' , 'Freelancer'],
  typeSpeed:70,
  backSpeed:50,
  loop:true
});
var typed = new Typed('.wrapper-scnd', {
  strings:['Student','Developer' , 'Designer' , 'Ravshan' , 'Freelancer'],
  typeSpeed:70,
  backSpeed:50,
  loop:true
});



let array = [
  {
    id:1,
    category:'Best',
    link:'https://festive-swirles-1e14c5.netlify.app',
    text:'Sinauw',
    img:'../img/screencapture-festive-swirles-1e14c5-netlify-app-2021-10-14-11_07_50.png'
  },
  {
    id:2,
    category:'Not-ready',
    link:'https://hardcore-keller-5b1267.netlify.app',
    text:'Creative Chair',
    img:'../img/screencapture-hardcore-keller-5b1267-netlify-app-2021-10-14-11_08_12.png'
  },
  {
    id:3,
    category:'Not-ready',
    link:'https://cocky-yonath-8ca69a.netlify.app',
    text:'My Team',
    img:'../img/screencapture-cocky-yonath-8ca69a-netlify-app-2021-10-14-11_05_45.png'
  },
  {
    id:4,
    category:'Favorites',
    link:'https://dogs-irwin.netlify.app',
    text:'Dogs',
    img:'../img/screencapture-dogs-irwin-netlify-app-2021-10-14-11_09_45.png'
  },
  {
    id:5,
    category:'Best',
    link:'https://pixer-irwin.netlify.app',
    text:'Pixer',
    img:'../img/screencapture-pixer-irwin-netlify-app-2021-10-14-11_09_19.png'
  },
  {
    id:6,
    category:'Favorites',
    link:'https://happy-jennings-cda530.netlify.app',
    text:'Arun Roy',
    img:'../img/screencapture-happy-jennings-cda530-netlify-app-2021-10-14-11_06_46.png'
  },
]
let global = document.querySelector('.portfolio__list')
let template = document.querySelector('.template').content;
function getItems (element){
  array.forEach((item) => {
    if(element == item.category){
      sortItem(item)
    }else if(element == 'All'){
      sortItem(item)
    }
  })
}
array.forEach((i) => {
  sortItem(i)
})
function sortItem (item){
  let newTemp = template.cloneNode(true)
  newTemp.querySelector('.portfolio__item').style.backgroundImage = `url(${item.img})`
  newTemp.querySelector('.portfolio__link').href = item.link
  newTemp.querySelector('.portfolio__text').textContent = item.text
  newTemp.querySelector('.portfolio__static-text').textContent = item.category
  global.append(newTemp)
}
let arrSort = document.querySelectorAll('.sort')
arrSort.forEach((item) => {
  item.addEventListener('click', (event) => {
    global.innerHTML = null
    getItems(event.target.dataset.id)
  })
})