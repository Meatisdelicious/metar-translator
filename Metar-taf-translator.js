// Traducteur Metar et TAF en language parle

//METAR: LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO
//22012G22KT=
const info = getInformation(ta_chaine);

getNameOACI = (string) => {}// tu ecris ta regex ici
getHeure = (string) => {}// pareil pour getName
getTypeMetar = (string) => {}


getInformation = R.applySpec({
    nom_aerodrome: getName,
    heure: getHeure
});




// dot.env permet de charger des valeurs depuis mon environnement
// xo, gulp, mocha, test unitaires, git, gitub action
// programmation fonctionnelle uniquement

/*
1. git add .
2. git commit -m 'your msg'
3. git push

xo, gulp doesn't work on gitub_action, mocha

xo : Enforces strict codestyle
gulp : lets developers automate many development tasks. Like compiling the script.
mocha : Mocha is used to run your automated tests in Node.
test unitaire : tester son code
github action :
 */
