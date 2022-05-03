alert("hello, world!");
window.onload = function() {
  document.querySelector("#bigDecoration").addEventListener("click", increaseFontReguraly);
  document.querySelector("#bling").addEventListener("change", decTextArea);
}


function increaseFont() {
  var el = document.getElementById("myText");
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize + 2) + 'px';
}

function increaseFontReguraly(){
  setInterval(increaseFont, 500);
}

function decTextArea() {
  if (bling.checked) {
    myText.style.fontWeight = "bold";
    myText.style.color = "green";
    myText.style.textDecoration = "underline";
    body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Usdollar100front.jpg/800px-Usdollar100front.jpg?20121125073311')";

  } else {
    myText.style.fontWeight = "normal";
    myText.style.color = "black";
    myText.style.textDecoration = "none";
    body.style.backgroundImage ="none";

  }
}
