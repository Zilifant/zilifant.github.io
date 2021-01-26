// let pass = "ainsley"
// console.log(1 == 1);
// console.log(checkPass("ainsley"))
// checkPass(pass) ? console.log("yes") : console.log("NO NO NO");

function getPass() {
  console.log("getPass");
  return document.getElementById("pass").value.toLowerCase();
}

function checkPass(pass) {
  console.log("checkPass");
  return pass == "ainsley";
}

function showCorrect() {
  console.log("showCorrect");
  correctImg.classList.toggle('revealed');
}

function showWrong() {
  console.log("showWrong");
  wrongImg.classList.toggle('revealed');
}

function validateHotDog() {
  console.log("validateHotDog");
  let pass = getPass();
  console.log(pass);
  checkPass(pass) ? showCorrect() : showWrong();
}

function hideMsg(e) {
  console.log("hideMsg")
  e.classList.toggle('revealed');
}

const hotdogform = document.getElementById('hotdog-form');
hotdogform.addEventListener("submit", validateHotDog);

const correctImg = document.getElementById('ainsley');
const ainsleyBtn = document.getElementById('ainsley-btn');
ainsleyBtn.addEventListener("click", function(){hideMsg(correctImg)});

const wrongImg = document.getElementById('cowboy');
const cowboyBtn = document.getElementById('cowboy-btn');
cowboyBtn.addEventListener("click", function(){hideMsg(wrongImg)});