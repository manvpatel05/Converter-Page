function temperature() {
  var c = document.getElementById("celcius").value;
  var f = (c * 9 / 5) + 32;
  document.getElementById("farenheit").value = f;
}

function weight() {
  var kg = document.getElementById("kilo").value;
  var lbs = kg * 2.2;
  document.getElementById("pounds").value = lbs;
}

function distance() {
  var km = document.getElementById("km").value;
  var miles = km * 0.62137;
  document.getElementById("miles").value = miles;
}