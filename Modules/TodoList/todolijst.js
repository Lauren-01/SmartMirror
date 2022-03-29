// maak een sluit knop per item
var lijst = document.getElementsByTagName("li");
var i;
for (i = 0; i < lijst.length; i++) {
  var x = document.createElement("div");
  var text = document.createTextNode("\u00D7");
  x.className = "sluit";
  x.appendChild(text);
  lijst[i].appendChild(x);
}

// verwijder lijst item
var sluit = document.getElementsByClassName("sluit");
var i;
for (i = 0; i < sluit.length; i++) {
  sluit[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//voeg een button + per element 
var lijst  = document.querySelector('ul');
lijst .addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);

// maak lijst
function nieuwItem() {
  var lijst  = document.createElement("li");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  lijst .appendChild(t);

  if (inputValue === '') {
    alert("Je hebt niet ingevuld.");
  } else {
    document.getElementById("Lijst").appendChild(lijst );
  }
  document.getElementById("Input").value = "";

  var x = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  x.className = "sluit";
  x.appendChild(text);
  lijst .appendChild(x);

  for (i = 0; i < sluit.length; i++) {
    sluit[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 
