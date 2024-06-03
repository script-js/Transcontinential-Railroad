var points = [Math.ceil(Math.random() * (38 - 20) + 20),Math.ceil(Math.random() * (56 - 39) + 39),Math.ceil(Math.random() * (75 - 57) + 57),Math.ceil(Math.random() * (87 - 76) + 76)]
var messages = ["<h1>Raid!</h1>A group of natives has raided one of your supply sheds!<p></p><button onclick='cAction(negative)'>Spread the word about how scary natives are</button><button onclick='cAction(positive)'>Do Nothing</button>","<h1>Attack!</h1>A group of natives has attacked a group of your workers! All of them were either wounded or killed.<p></p><button onclick='cAction(negative)'>Spread the word about how scary natives are</button><button onclick='cAction(positive)'>Do Nothing</button>","<h2>A group of Native Americans has informed you that you that the railroad is approaching their ancestral hunting grounds.</h2>You can change the route of the train, but it will cost you more money.<p></p><button onclick='cAction(positive,-20); addition += 2'>Change Course</button><button onclick='cAction(negative)'>Continue Route</button>","<h2>The government has given you a plot of land that goes through native lands.</h2>If you accept it, you will save a lot of money.<p></p><button onclick='cAction(negative);addition += -2;'>Accept</button><button onclick='cAction(positive)'>Decline</button>","<h2>The government will pay you $200 if you allow a large group of military officers to get a train ride to deal with some &quot;issues&quot; with natives</h2><p></p><button onclick='cAction(negative);moneyAdd(200)'>Accept</button><button onclick='cAction(positive)'>Decline</button>","<h2>A group of hunters have brought their guns onto the train and are shooting buffalo from the train window.</h2><p></p><button onclick='cAction(negative);'>Leave it alone</button><button onclick='cAction(positive)'>Tell them to stop</button>","<h2>The government is offering you some land. This land was previously protected by a treaty, but the government has declared it void without the other native tribes' consent.</h2>If you accept, you will save money.<p></p><button onclick='cAction(negative);addition += -1'>Accept</button><button onclick='cAction(positive)'>Decline</button>"]
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
  popout("<div style='text-align:center'><h1>Your Score: " + ((parseInt(money.innerHTML) - (parseInt(negative.innerHTML) * 10)) + (parseInt(positive.innerHTML) * 10)) + "</h1><a href='/'><button style='width:500px;padding:10px;'>Quit to Title</button></a></div>")
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

function start() {
  popout()
  setTimeout(function() {
    popout("<h1>Get Ready!</h1>")
    setTimeout(function() {
      popout()
      move()
    },2500)
  },400)
}

popout("tutorial<a href='javascript:start()'><button style='width:500px;padding:10px;'>Start</button></a>")
