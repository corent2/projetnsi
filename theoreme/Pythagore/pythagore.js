function pytha()
{
var x = document.getElementById("cote1").value;
var y = document.getElementById("cote2").value;
var res = x * x + y * y

res.toString();

if((x > 0) && (y > 0)){
document.getElementById("resultat").innerHTML="Hypothénuse (CB) : √(" + x + "²" + " + " + y + "²" + " ) = "+ Math.round(Math.sqrt(res)*10000)/10000;
}
else {
document.getElementById("resultat").innerHTML="Erreur : Veuillez donner des valeurs supérieures à 0."
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
