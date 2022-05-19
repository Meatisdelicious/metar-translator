# Metar translator

// Auteur : Adrien Tirlemont

### Traducteur de Metar (information meteorologiques aeronautiques automatisées) en data dans un fichier JSON. 

Ce projet a été code en fonctionnel, avec le langage javascript.

##### On a cela en entrée :

Metar : LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

##### On retourne en Sortie un fichier JSON contenant :

{"codeOaci":"Metar de l aerodrome LFPN",gut
"DateMetar":"Fait le 10 ",
"HeureMetar":"à 1400Zulu",
"typeMetar":" de type : AUTO",
"CapVent":"Vent au 220°",
"ForceVent":"de 15KT",
"TempeMax":"Temperature maximale (°C) de : 28/"
,"TempeRose":"Temperature au point de rosée (°C) de : /12"
,"Pression":"Pression (Hpa) de Q1017",
"ConditionsPart":"Conditions particulières de type : TEMPO"}




