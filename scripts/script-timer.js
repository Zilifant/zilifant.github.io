const timerBtnA = document.querySelector("#timer-btn-a");
const stopBtnA = document.querySelector("#timer-btn-a-stop");
const timerBtnB = document.querySelector("#timer-btn-b");
const stopBtnB = document.querySelector("#timer-btn-b-stop");
const timerBtnC = document.querySelector("#timer-btn-c");
const stopBtnC = document.querySelector("#timer-btn-c-stop");
const testBtn = document.querySelector("#test-btn");

let intA = [];
let intB = [];
let intC = [];

testBtn.addEventListener("click", function() {
  console.log("A: "); console.log(intA);
  console.log("B: "); console.log(intB);
  console.log("C: "); console.log(intC);
});

timerBtnA.addEventListener("click", function() {
  runTimer(setStartTime(), intA, "intA");
  if (intB.length > 0) {
    stopTimer(intB);
  } else if (intC.length > 0) {
    stopTimer(intC);
  };
});

stopBtnA.addEventListener("click", function() {
  stopTimer(intA);
});

timerBtnB.addEventListener("click", function() {
  runTimer(setStartTime(), intB, "intB");
  if (intA.length > 0) {
    stopTimer(intA);
  } else if (intC.length > 0) {
    stopTimer(intC);
  };
});

stopBtnB.addEventListener("click", function() {
  stopTimer(intB);
});

timerBtnC.addEventListener("click", function() {
  runTimer(setStartTime(), intC, "intC");
  if (intA.length > 0) {
    stopTimer(intA);
  } else if (intB.length > 0) {
    stopTimer(intB);
  };
});

stopBtnC.addEventListener("click", function() {
  stopTimer(intC);
});

//--------------------

function stopTimer(timerArr) {
  console.log("stopTimer");
  for (var i=0; i < timerArr.length; i++) {
    clearInterval(timerArr[i]);
  };
  timerArr.length = 0;
}

function setStartTime() {
  console.log("setStartTime");
  return Date.now();
}

function runTimer(startTime, timerArr, timerID) {
  console.log("runTimer");
  timerArr.push(setInterval(function() { displayElapsedTime(startTime, timerID); }, 1000));
};

function countElapsedTime(startTime) {
  console.log("countElapsedTime");
  return (Date.now() - startTime);
};

function formatElapsedTime(startTime) {
  console.log("formatElapsedTime");
  return (countElapsedTime(startTime) / 1000).toFixed(0);
};

function displayElapsedTime(startTime, timerID) {
  console.log("displayElapsedTime");
  document.getElementById(`${timerID}-display`).innerHTML = formatElapsedTime(startTime);
};