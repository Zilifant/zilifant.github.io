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