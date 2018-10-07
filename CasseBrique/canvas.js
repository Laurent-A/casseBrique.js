var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// ********** BOUGER LA BALLE ***********

var x = canvas.width/2; // je défini la position de départ de ma balle
var y = canvas.height-30;
var dx = 2; // j'ajoute une valeur pour faire croire qu'a chaque rafraichissement ma balle bouge de 2px
var dy = -2;


function draw() {
    // je dessinne ma balle :
    ctx.clearRect(0,0, canvas.width,canvas.height); // Toute la zone couverte par ce rectangle effacera tout contenu dessiné précédemment.  c'est la method clearRect qui le permet
    ctx.beginPath();
    ctx.arc(x,y,10,0, Math.PI*2);
    ctx.fillstyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx; // ma balle suis un chemin prédéfini par dx et dy
    y += dy;
}
setInterval(draw, 10) // grace a setinteval ma balle sera appelé touts les 10 millisecondes














// TIPS SUPPLEMENTAIRE EN JS

/*
    ctx.beginPath(); //methode annoncant le début
    ctx.rect(20,40,50,50); // un rectangle en utilisant rect() : les deux premières valeurs spécifient les coordonnées du coin supérieur gauche du rectangle tandis que les deux suivantes spécifient la largeur et la hauteur du rectangle. Dans notre cas, le rectangle est peint à 20 pixels du côté gauche de l'écran et à 40 pixels du haut, et a une largeur de 50 pixels et une hauteur de 50 pixels
    ctx.fillStyle ="#FF0000"; // je stock ma couleur rouge
    ctx.fill(); // j'applique ma couleur rouge
    ctx.closePath();//methode annoncant la fin

// ctx.arc(240, 160, 20, 0, Math.PI*2, false); me permet de dessiner un cercle : direction du dessin (false(faux) pour le sens des aiguilles d'une montre, la valeur par défaut, ou true (vrai) pour le sens inverse).
// ctx.stroke(); permet de mettre une couleur uniquement sur la bordure de la forme
*/