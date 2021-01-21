//-----------------------------
//Theme-Switcher-Slider--------
//-----------------------------

// Remove Preload 
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    let targetNodes = document.querySelectorAll('.preload');
    let i;
    for (i = 0; i < targetNodes.length; i++) {
      targetNodes[i].classList.remove('preload');
    }
  }, 1000)
})

const themeSwitch = document.querySelector('.theme-switch-bg input[type="checkbox"]');

// check if any theme has been saved to local storage; assign to currentTheme if so
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// when page loads, if a theme has been saved to local storage, check if it's dark; if so, change theme-switch and imgs to match
if (currentTheme) {
  document.documentElement.setAttribute('current-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
    imgsToDarkMode();
  } else {
    imgsToLightMode();
  }
} else {
  if (document.getElementById("headshot")) {
    document.getElementById("headshot").setAttribute('src', '../assets/images/headshot.jpg');
  }
  if (document.getElementById("closed-system-title-img")) {
    document.getElementById("closed-system-title-img").setAttribute('src', '../assets/icons/closed-system-title-light.svg');
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

themeSwitch.addEventListener('change', switchTheme, false);

//
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

//-------------------
//Footer Random Quote
//-------------------

(function newQuote() { // IIFE
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

//-------------------
//Collapsible Lists--
//-------------------

let exl = document.getElementsByClassName("exl-btn");
let i;

for (i = 0; i < exl.length; i++) {
  exl[i].addEventListener("click", function() {
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