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
      var digit = parseInt(char.style.right) + 0.5;
      if (digit < 89) {
        move(true)
        console.log()
        finish()
      } else {
        console.log("1")
        char.style.right = digit + "%"
      }
    },1)
  }
}

function finish() {
  popout("<h1>Your Score: " + (parseInt(money.innerHTML) - parseInt(bias.innerHTML)) + "</h1>")
}
