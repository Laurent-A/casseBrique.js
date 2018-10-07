var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2; // je défini la position de départ de ma balle
var y = canvas.height-30;
var dx = 2; // j'ajoute une valeur pour faire croire qu'a chaque rafraichissement ma balle bouge de 2px
var dy = -2;
var ballRadius =10;//tiendra le rayon du cercle dessiné et sera utilisée pour les calculs
// je définis la taille de la raquette :
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2; // le point de depart se situe uniquement en fonction de la barre x
// je définis les mouvements de la raquette : 
var rightPressed = false;//La valeur par défaut pour les deux est falseparce qu'au début, les boutons de commande ne sont pas enfoncés.
var leftPressed = false;

// ecouteeurs de touche
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// je définis ce qu'il se passe lorsque que ca s'active
// Les deux fonctions prennent un événement en tant que paramètre, représenté par la (e) variable. À partir de là, vous pouvez obtenir des informations utiles: le keyCodecontient les informations sur la touche sur laquelle vous avez appuyé. Par exemple, le code clé 37 est la touche de curseur gauche et 39 le curseur de droite. Si vous appuyez sur le curseur gauche, la leftPressedvariable est définie sur true, et lorsqu'elle est relâchée, la leftPressedvariable est définie sur false. Le même motif suit avec le curseur droit et la rightPressedvariable.
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }  
}

function drawBall(){
    // je dessinne ma balle 
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0, Math.PI*2);
    ctx.fillstyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    // je dessine ma raquette
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // je montre comment ma balle doit bouger
    ctx.clearRect(0,0, canvas.width,canvas.height); // Toute la zone couverte par ce rectangle effacera tout contenu dessiné précédemment.  c'est la method clearRect qui le permet
    drawBall();
    drawPaddle();
    // SYSTEME DE COLLISION
    if (x + dx >canvas.width-ballRadius || x + dx < ballRadius ) { //J'utilise BALL RADIUS CAR SINON MA BALLE DISPARAIT LEGEREMENT, ainsi  ma balle rebondit se le rayon
        dx = -dx;
    }

    if (y + dy < ballRadius){
        dy = -dy;
    } 
    else if (y + dy > canvas.height-ballRadius) { // si ma balle touche le bas alors une alert et reload du canvas
        if ( x > paddleX && x < paddleX + paddleWidth) { // mais si ma balle est entre les 2 bords de ma raqueete alors elle continue de bouge
           dy = -dy;
        }
        else {
        alert("GAME OVER PAPUCHETTE");
        document.location.reload();
        }
    }
    // systeme de deplacement de raquette
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
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