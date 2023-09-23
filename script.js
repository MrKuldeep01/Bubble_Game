let score = 0;
let hit = document.getElementById("hit");
let timerval = document.getElementById("timer");
let timer = 60;
let randomnum = 0;
// ----------- function for bbl creation-----------------
const bblCreatFun = () => {
  for (let i = 1; i <= 114; i++) {
    document.getElementById("mainbox").innerHTML += `
    <span class="bbl">${randomnum}</span>`;
    randomnum = Math.floor(Math.random() * 10 + 1);
  }
};
const scorefun = () => {
  let sc = Number(document.getElementById("score").textContent);
  sc = sc + 10;
  document.getElementById("score").textContent = sc;
  // console.log(" score function is running", sc);
};
// scorefun();

function hitassign() {
  randomnum = Math.floor(Math.random() * 10 + 1);
  hit.innerText = randomnum;
}

// ----------- function for hit events -----------------
const hitfun = () => {
  document.getElementById("mainbox").addEventListener("click", (e) => {
    let hitnum = Number(e.target.textContent);
    let val = document.getElementById("hit").textContent;
    // console.log("hited number is ", hitnum);

    if (hitnum == val) {
      scorefun();
      // bblCreatFun();
      // timer+=15;
      // timerfun();
      hitassign();
    } 
    /*else {
      document.getElementById("notification").innerText = " Wrong item !";
    }*/
  });
};

// ----------- function for timer-----------------
function timerfun() {
  let stoptime = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerval.innerHTML = timer;
    } else {
      stoptime = clearInterval();
      timer.innerText = "Over";
      document.getElementById(
        "mainbox"
      ).innerHTML = `<h1 class="overh">Game Over</h1>`;
    }
  }, 1000);
}

// -----  calling functions  -----------------
bblCreatFun();
timerfun();
hitassign();
hitfun();
