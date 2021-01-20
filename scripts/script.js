/*-----------------------------*/
/*Theme-Switcher- Slider-------*/
/*-----------------------------*/

/* Remove Preload */
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    let targetNodes = document.querySelectorAll('.preload');
    let i;
    for (i = 0; i < targetNodes.length; i++) {
      targetNodes[i].classList.remove('preload');
    }
  }, 1000)
})

const toggleSwitch = document.querySelector('.theme-switch-bg input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('current-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    imgsToDarkMode();
  } else {
    imgsToLightMode();
  }
}

function imgsToDarkMode() {
  let imglist = document.getElementsByClassName("light-dark-img");
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].setAttribute('src', `../assets/partner-logos/${imglist[i].id}-light.png`);
  }
  if (document.getElementById("headshot")) {
    document.getElementById("headshot").setAttribute('src', '../assets/images/headshot-dark.png');
  };
  if (document.getElementById("closed-system-title-img")) {
    document.getElementById("closed-system-title-img").setAttribute('src', '../assets/icons/closed-system-title-dark.svg');
  };
}

function imgsToLightMode() {
  let imglist = document.getElementsByClassName("light-dark-img");
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].setAttribute('src', `../assets/partner-logos/${imglist[i].id}-color.png`);
  };
  if (document.getElementById("headshot")) {
    document.getElementById("headshot").setAttribute('src', '../assets/images/headshot.jpg');
  };
  if (document.getElementById("closed-system-title-img")) {
    document.getElementById("closed-system-title-img").setAttribute('src', '../assets/icons/closed-system-title-light.svg');
  };
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('current-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    imgsToDarkMode();
  } else {
    document.documentElement.setAttribute('current-theme', 'light');
    localStorage.setItem('theme', 'light');
    imgsToLightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// function imgToLight(element) {
//   document.getElementById(element).setAttribute('src', `../assets/partner-logos/${element}-light`)
// }

// function imgToColor(element) {
//   document.getElementById(element).setAttribute('src', `../assets/partner-logos/${element}-color`)
// }

// let test = document.getElementsByClassName("logo-flex");
// console.log(test[0]);
// test[0].setAttribute('src', `${this.id}.com`);
// console.log(test[0]);
// console.log(test[0].id);

/*-------------------*/
/*Footer Random Quote*/
/*-------------------*/

(function newQuote() { /* IIFE */
  let quotes = [
    '<a href="https://en.wikipedia.org/wiki/Francis_Bacon">Nature to be commanded must be obeyed.</a>',
    '<a href="https://en.wikipedia.org/wiki/Augustine_of_Hippo">Love, and do what you will.</a>',
    '<a href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow">Nothing in life is as important as you think it is, while you are thinking about it.</a>',
    '<a href="https://en.wikiquote.org/wiki/Bruce_Lee">Freedom discovers man the moment he loses concern over what impression he is making or about to make.</a>',
    '<a href="https://en.wikiquote.org/wiki/Johann_Wolfgang_von_Goethe">That which you inherit from your fathers, you must earn in order to possess.</a>'
  ];
  let randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("foot-quote-display").innerHTML = quotes[randomQuote];
})();

/*-------------------*/
/*Collapsible Lists--*/
/*-------------------*/

let coll = document.getElementsByClassName("exl-btn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("rotated");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/*-----------------------------*/
/*Obsolete --------------------*/
/*-----------------------------*/

// window.onload = onPageLoad();

// function onPageLoad() {
//   document.getElementById("slide").checked = true;
// }

// let sec = 0;
// function pad ( val ) { return val > 9 ? val : "0" + val; }
// setInterval( function(){
//     document.getElementById("seconds").innerHTML=pad(++sec%60);
//     document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
// }, 1000);

// function modeToggle() {
//   var element = document.body;
//   element.classList.toggle("light-mode");
// }

/*---------------*/
/*
// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "light-theme.css"
  if (theme.getAttribute("href") == "../styles/style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "../styles/style-light.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "../styles/style.css";
  }
});
*/
/*---------------*/

// this one is just to wait for the page to load
// document.addEventListener('DOMContentLoaded', () => {
//   const themeStylesheet = document.getElementById('#theme-link');
//   const storedTheme = localStorage.getItem('#theme-link');
//   if(storedTheme){
//       themeStylesheet.href = storedTheme;
//   }
//   const themeToggle = document.getElementById('.btn-toggle');
//   themeToggle.addEventListener('click', () => {
//       // if it's light -> go dark
//       if(themeStylesheet.href.includes('light')){
//           themeStylesheet.href = '../styles/style.css';
//           themeToggle.innerText = 'Light Mode';
//       } else {
//           // if it's dark -> go light
//           themeStylesheet.href = '../styles/style-light.css';
//           themeToggle.innerText = 'Dark Mode';
//       }
//       // save the preference to localStorage
//       localStorage.setItem('#theme-link',themeStylesheet.href)  
//   })
// })

/*---------------*/

// function swapStyleSheet(sheet){
//   document.getElementById('theme').setAttribute('href', sheet);
//   localStorage.setItem("sheet", sheet);
// }

// window.onload = _ =>
//   swapStyleSheet(
//    localStorage.getItem("sheet") || "default.css"
//   );

/*-----------------------------*/
/*Theme-Switcher Button--------*/
/*-----------------------------*/

// if (
//   localStorage.getItem('current-theme') === 'dark' ||
//   (window.matchMedia('(prefers-color-scheme: dark)').matches &&
//   !localStorage.getItem('color-mode'))
// ) {
//   document.documentElement.setAttribute('current-theme', 'dark')
// }

// const toggleColorMode = e => {
//   if (e.currentTarget.classList.contains("light-hidden")) {
//     document.documentElement.setAttribute("current-theme", "light");
//     localStorage.setItem("current-theme", "light");
//     return;
//   }
//   document.documentElement.setAttribute("current-theme", "dark");
//   localStorage.setItem("current-theme", "dark");
// };

// const toggleColorButtons = document.querySelectorAll(".current-theme-btn");

// toggleColorButtons.forEach(btn => {
//   btn.addEventListener("click", toggleColorMode);
// });

/*---------------*/

// function hover(element) {
//   document.getElementById(element).setAttribute('src', '../assets/icons/chevrons-oran5.svg');
// }

// function unhover(element) {
//   document.getElementById(element).setAttribute('src', '../assets/icons/chevrons-white.svg');
// }