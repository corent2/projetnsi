function sphere()
{
var x = document.getElementById("rayon").value;
var res = 4/3 * 3.14159265359 * x * x * x

res.toString();

if(x>0) {
document.getElementById("resultat").innerHTML="Volume : 4/3 * π * " + x + "³ = " + Math.round(res*10000)/10000
}
else {
document.getElementById("resultat").innerHTML="Erreur : Veuillez rentrer une valeur supérieure à 0."
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
