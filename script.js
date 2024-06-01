// Points: raid, buffalo grounds, smaller land, military boarding, broken treaty, winding railroad, inform people on culture, land stealing

var points = [Math.ceil(Math.random() * (38 - 20) + 20),Math.ceil(Math.random() * (56 - 39) + 39),Math.ceil(Math.random() * (75 - 57) + 57),Math.ceil(Math.random() * (87 - 76) + 76)]
var messages = ["test<br><button onclick='cAction(negative)'>negative</button><button onclick='cAction(positive)'>positive</button>","testw<br><button onclick='cAction(negative)'>negative</button><button onclick='cAction(positive)'>positive</button>","aaa<br><button onclick='cAction(negative)'>negative</button><button onclick='cAction(positive)'>positive</button>","hello"]
var addition = 0;

function randMsg() {
  var num = Math.floor(Math.random() * messages.length)
  var val = messages[num]
  messages.splice(num, 1)
  return val;
}

var checkpoints = [
  {percent: points[0],message: randMsg()},
  {percent: points[1],message: randMsg()},
  {percent: points[2],message: randMsg()},
  {percent: points[3],message: randMsg()}
]


function popout(text) {
  if (!text) {
    popup.style.height = "2px"
    popup.style.width = "2px"
    popup.innerHTML = "";
    setTimeout(function() {
      popupBack.style.display = "none";
    },400)
  } else {
    popupBack.style.display = "flex";
    setTimeout(function() {
      popup.style.height = "90%"
      popup.style.width = "65%"
    },50)
    setTimeout(function() {
      popup.innerHTML = text;
    },400)
  }
}

var moveint;

function move(off) {
  if (off == true) {
    clearInterval(moveint)
  } else {
    moveint = setInterval(function() {
      var digit = parseInt(char.style.right) + 1;
      var digit1 = digit - 1
      if (points.includes(digit1)) {
        move(true)
        Object.keys(points).forEach(function(k) {
          if (points[k] == digit1) {
            popout(checkpoints[k].message)
            char.style.top = (parseInt(char.style.top) + checkpoints[k].message) + "%"
          }
        })
      } else if (digit > 88) {
        move(true)
        console.log()
        finish()
      } else {
        money.innerHTML = parseInt(money.innerHTML) - (5 - addition);
        if (parseInt(money.innerHTML) < 1) {
          popout("<h1 style='color:#e82e20'>You Lose</h1><h2>You ran out of money!</h2>")
        } else {
          char.style.right = digit + "%"
        }
      }
    },300)
  }
}

function finish() {
  popout("<h1>Your Score: " + ((parseInt(money.innerHTML) - (parseInt(negative.innerHTML) * 10)) + (parseInt(positive.innerHTML) * 10)) + "</h1>")
}

function cAction(elem,mover) {
  popout()
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
  char.style.right = (parseInt(char.style.right) + 1) + "%"
  if (mover) {
    char.style.top = (parseInt(char.style.top) + mover) + "%"
  }
  move()
}

function moneyAdd(amnt) {
  money.innerHTML = parseInt(money.innerHTML) + amnt;
}
