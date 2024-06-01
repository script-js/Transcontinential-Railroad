// Points: raid, buffalo grounds, smaller land, military boarding, broken treaty, winding railroad, inform people on culture, land stealing

var points = [Math.ceil(Math.random() * (38 - 20) + 20),Math.ceil(Math.random() * (56 - 39) + 39),Math.ceil(Math.random() * (75 - 57) + 57),Math.ceil(Math.random() * (87 - 76) + 76)]
var messages = ["<h1>Raid!</h1>A group of natives has raided one of your supply sheds!<br><button onclick='cAction(negative)'>Spread the word about how scary natives are</button><button onclick='cAction(positive)'>Leave it alone</button>","<h1>Attack!</h1>A group of natives has attacked a group of your workers! All of them were either wwounded or killed.<br><button onclick='cAction(negative)'>Spread the word about how scary natives are</button><button onclick='cAction(positive)'>Leave it alone</button>","<h2>A group of Native Americans has informed you that you that the railroad is approaching their ancestral hunting grounds.</h2>You can change the route of the train, but it will cost you $50.<br><button onclick='cAction(positive,-20);moneyAdd(-20)'>Change Course</button><button onclick='cAction(negative)'>Continue Route</button>","<h2>The government has given you a plot of land that goes through native lands.</h2>If you accept it, you will save a lot of money.<br><button onclick='cAction(negative);addition = -2;'>Accept</button><button onclick='cAction(positive)'>Decline</button>"]
var addition = 0;

function randMsg() {
  var num = Math.floor(Math.random() * messages.length)
  var val = messages[num]
  messages.splice(num, 1)
  return "<div style='text-align:center'>" + val + "</div>";
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
  popout("<div style='text-align:center'><h1>Your Score: " + ((parseInt(money.innerHTML) - (parseInt(negative.innerHTML) * 10)) + (parseInt(positive.innerHTML) * 10)) + "</h1><button style='width:500px;padding:10px;'>Quit to Title</button></div>")
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
