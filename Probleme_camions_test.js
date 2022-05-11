// Simulation du problème du camion amazon
function setup() {
  createCanvas(400, 400);
  liste_ville = []; // liste de ville
  nb_ville = 20; // Nombr
  // e de villes
  for (var i = 0; i < nb_ville; i++) {
    v = createVector(random(40, width - 40), random(40, height - 40));
    liste_ville.push(v); // push ajoute le nombre de villes a liste_ville
  }

  maxTemp = (width + height) / 15; // 15 fonctionne bien. Ca doit etre du meme ordre que la longueur des connections
  // pour d'autres nombre de villes, il serait peut etre nécessaire de le diminuer
  time = 0;
  essais_max = 600; // Le nombre max d'essais. Si il n'y en as pas assez l'algo se stop avant d'avoir trouver une solution optimale
  // je n'ai pas reussis a trouver une autre formule. C'est en essayant differentes solution que j'ai trouver ca
  frame = 0;
}

function draw() {
  background(0);
  frameRate(10);

  var T = temperature((time + 1) / essais_max);

  beginShape();
  for (var i = 0; i < nb_ville; i++) {
    vertex(liste_ville[i].x, liste_ville[i].y);
    fill(255);
    noStroke();
    ellipse(liste_ville[i].x, liste_ville[i].y, 8, 8);
  }
  // parametres de la map pour afficher les villes.
  noFill();
  stroke(255);
  strokeWeight(2);
  endShape(CLOSE);

  //longueur totale du chemin
  var pathlength = 0;
  for (var i = 0; i < nb_ville; i++) {
    var d = liste_ville[i].dist(liste_ville[(i + 1) % nb_ville]);
    pathlength += d;
  }
  //prends 2 somments au hasard, et echange le chemin avec la ville voisine pour calculer l'espacement
  var d1 = 0;
  var d2 = T + 1;
  var i = 0;
  var j = 0;
  while (d2 - d1 > T || i - j < 2) {
    i = floor(random(nb_ville));
    j = floor(random(nb_ville));
    d1 =
      liste_ville[i].dist(liste_ville[(i + 1) % nb_ville]) +
      liste_ville[j].dist(liste_ville[(j + 1) % nb_ville]);
    d2 =
      liste_ville[i].dist(liste_ville[j]) +
      liste_ville[(i + 1) % nb_ville].dist(liste_ville[(j + 1) % nb_ville]);
  }
  var newlength = pathlength - d1 + d2;

  // 2eme option : Echange inverse cette fois, entre 2 sommets.
  if (probability(pathlength, newlength, T) >= random()) {
    m = liste_ville
      .slice(
        Math.min((i + 1) % nb_ville, (j + 1) % nb_ville),
        Math.max((i + 1) % nb_ville, (j + 1) % nb_ville)
      )
      .reverse();
    l = liste_ville.slice(0, Math.min((i + 1) % nb_ville, (j + 1) % nb_ville));
    r = liste_ville.slice(
      Math.max((i + 1) % nb_ville, (j + 1) % nb_ville),
      nb_ville
    );
    liste_ville = l.concat(m).concat(r);
  }

  time++;

  textSize(25);
  text(pathlength, 160, 20);
  text(frame, 20, 20);
  frame++;

  if (time == essais_max) {
    noLoop();
  }
}

// temps_ecoule : une fraction du temps ecoule
function temperature(temps_ecoule) {
  return essais_max * (1 - temps_ecoule) + 0.0001;
}
// T : temperature
// n : position du voisin généré
// c : position actuelle

function probability(position, position_v, Temp) {
  if (position_v < position) {
    return 1;
  } else {
    return exp(-(position_v - position) / Temp);
  }
}
// dot.env permet de charger des valeurs depuis mon environnement
//
// xo, gulp, mocha, test unitaires, git, gitub action
// programmation fonctionnelle uniquement

/*
1. git add .
2. git commit -m 'your msg'
3. git push

xo, gulp doesn't work on gitubaction, mocha
 */
