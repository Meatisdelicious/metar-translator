# Metar and Taf translator

// Auteur : Adrien Tirlemont

Traducteur de Metar et TAF (information meteorologiques aeronautiques automatisées) en langage humain. 

Ce projet a été code en fonctionnel, avec le langage javascript. 



On a cela en entrée :

Metar : LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

On retourne en Sortie : 

Metar de l'aerodrome LFPX, fait le 10 à 14h utc. 
Metar de type Auto. Vent du 220° 15 Kt. 
Vent variant du 170 à 250°. 
Type de couverture nuageuse : CAVOK.
Temperature maximale de 20°C.
Temperature au point de rosée de 12°C. 
Pression atmosphérique (en HPA) de Q1017. 
Conditions temporaires TEMPO.



