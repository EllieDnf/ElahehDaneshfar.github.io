function calcTip() {
  let subT = parseFloat(document.getElementById("subtotal").value);
  let t = parseFloat(document.getElementById("tip").value);
  document.getElementById("total").innerHTML = Math.round(subT * (1 + (t / 100)) * 100) / 100;
}
