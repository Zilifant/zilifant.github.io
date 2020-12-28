/*-----------------------------*/
/*Theme-Switcher- Slider-------*/
/*-----------------------------*/

/* Remove Preload */
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    let targetNode = document.querySelector('.preload');
    targetNode.classList.remove('preload');
  }, 1000)
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('color-mode', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-mode', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('color-mode', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

/*-------------------*/
/*Footer Random Quote*/
/*-------------------*/

(function newQuote() { /* IIFE */
  var quotes = [
    'Nature to be commanded must be obeyed. &mdash;Francis Bacon',
    'Love, and do what you will. &mdash;Augustine',
    'Strong opinions, weakly held.',
    'Nothing in life is as important as you think it is, while you are thinking about it. &mdash;Daniel Kahneman',
    'Freedom discovers man the moment he loses concern over what impression he is making or about to make. &mdash;Bruce Lee',
    'That which you inherit from your fathers, you must earn in order to possess. &mdash;Goethe'
  ];
  var randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomQuote];
})();

/*-----------------------------*/
/*Chevron Color Change on Hover*/
/*-----------------------------*/

function hover(element) {
  document.getElementById(element).setAttribute('src', '../assets/icons/chevrons-oran5.svg');
}

function unhover(element) {
  document.getElementById(element).setAttribute('src', '../assets/icons/chevrons-white.svg');
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
//   localStorage.getItem('color-mode') === 'dark' ||
//   (window.matchMedia('(prefers-color-scheme: dark)').matches &&
//   !localStorage.getItem('color=mode'))
// ) {
//   document.documentElement.setAttribute('color-mode', 'dark')
// }

// const toggleColorMode = e => {
//   if (e.currentTarget.classList.contains("light-hidden")) {
//     document.documentElement.setAttribute("color-mode", "light");
//     localStorage.setItem("color-mode", "light");
//     return;
//   }
//   document.documentElement.setAttribute("color-mode", "dark");
//   localStorage.setItem("color-mode", "dark");
// };

// const toggleColorButtons = document.querySelectorAll(".color-mode-btn");

// toggleColorButtons.forEach(btn => {
//   btn.addEventListener("click", toggleColorMode);
// });