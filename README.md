# Metar translator

// Auteur : Adrien Tirlemont

### Traducteur de Metar (information meteorologiques aeronautiques automatisées) en data dans un fichier JSON. 

Ce projet a été code en fonctionnel, avec le langage javascript.

##### On a cela en entrée :

Metar : LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

##### On retourne en Sortie un fichier JSON contenant :

```terminal
{"codeOaci":"Metar de l aerodrome LFPN",
"dateMetar":"Fait le 10 ",
"heureMetar":"à 1400Zulu",
"typeMetar":" de type : AUTO",
"capVent":"Vent au 220°",
"forceVent":"de 15KT",
"tempeMax":"Temperature maximale (°C) de : 28",
"tempeRose":"Temperature au point de rosée (°C) de : 12",
"laPression":"Pression (Hpa) de Q1017",
"conditionsPart":"Conditions particulières de type : TEMPO"}
```


