function cylindre()
{
var x = document.getElementById("hauteur").value;
var y = document.getElementById("rayon").value
var res = 3.14159 * y * y * x;
res.toString();
if((x > 0) && (y > 0))
{
document.getElementById("resultat").innerHTML="Volume : π * " + y + "² * " + x + " = " + Math.round(res*10000)/10000
}
else
{
document.getElementById("resultat").innerHTML="Erreur : Veuillez rentrer des valeurs supérieures à 0."
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
