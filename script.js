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
      popup.style.height = "70%"
      popup.style.width = "70%"
    },50)
    setTimeout(function() {
      popup.innerHTML = text;
    },400)
  }
}
