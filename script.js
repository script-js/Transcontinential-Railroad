// Encounters: raid, buffalo grounds, smaller land

var points = [Math.random() * (22 - 1) + 1,Math.random() * (44 - 23) + 23,Math.random() * (66 - 45) + 45,Math.random() * (88 - 67) + 67]

var checkpoints = [
  {percent: points[0],message: "test"},
  {percent: points[1],message: "test"},
  {percent: points[2],message: "test"},
  {percent: points[3],message: "test"}
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
      if (points.includes(digit)) {
        move(true)
        Object.keys(points).forEach(function(k) {
          if (points[k] == digit) {
            var num = k
          }
        })
        popout(checkpoints[num].message)
      } else if (digit > 88) {
        move(true)
        console.log()
        finish()
      } else {
        money.innerHTML = parseInt(money.innerHTML) - 5;
        if (parseInt(money.innerHTML) < 1) {
          popout("<h1 style='color:#e82e20'>You Lose</h1><h2>You ran out of money!</h2>")
        } else {
          char.style.right = digit + "%"
        }
      }
    },100)
  }
}

function finish() {
  popout("<h1>Your Score: " + ((parseInt(money.innerHTML) - (parseInt(negative.innerHTML) * 10)) + (parseInt(positive.innerHTML) * 10)) + "</h1>")
}

function addPoint(elem) {
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
