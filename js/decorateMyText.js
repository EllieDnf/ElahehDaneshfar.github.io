alert("hello, world!");
window.onload = function() {
  document.querySelector("#bigDecoration").addEventListener("click", increaseFontReguraly);
  document.querySelector("#bling").addEventListener("change", decTextArea);
  document.querySelector("#igpay").addEventListener("click", myIgpay);
  document.querySelector("#malkovitch").addEventListener("click", malkovich);

}


function increaseFont() {
  var el = document.getElementById("myText");
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize + 2) + 'px';
}

function increaseFontReguraly() {
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
    body.style.backgroundImage = "none";

  }
}

function myIgpay() {
  let data = myText.value;
  for (let i = 0; i < data.length;) {
    if (isVowel(data[i].toLowerCase())) {
      data += "ay";
      break;
    } else data = data.substring(1) + data[i];
  }
  myText.value = data;
}

function isVowel(c) {
  return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

function malkovich() {
  if (myText.value.length >= 5) myText.value = 'Malkovich';
}
