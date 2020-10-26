function thales1()
{
var x = document.getElementById("cote1p").value;
var y = document.getElementById("cote1g").value;
var z = document.getElementById("cote2").value;
var verif = y / x
var res = y * z / x

res.toString();

if((x > 0) && (y > 0) && (z > 0) && (verif >= 1)) {
  document.getElementById("resultat").innerHTML="DC = " + y + " * " + z + " / " + x + " = " + Math.round(res*10000)/10000
}
else {
  document.getElementById("resultat").innerHTML="Erreur : Veuillez donner des valeurs supérieures à 0, avec AC supérieur à AB."
}
}
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
