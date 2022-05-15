// Traducteur Metar et TAF en language parle

// METAR: LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

import * as R from 'ramda';
import fs from 'fs-extra';

/*

// En fonctionnel : Pression
import * as R from 'ramda';
const regexp = /Q[0-9]{4}/gim;
const recupPression = (str) => regexp.exec(str);
const getFromRegex = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex(recupPression),
  logMethod('Pression (Hpa) de ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Type de metar
import * as R from 'ramda';
const regexp = /A[A-Z]{3}/gim;
const recupTypeMetar = (str) => regexp.exec(str);
const getFromRegex = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
    getFromRegex(recupTypeMetar),
    logMethod(' de type : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

*/

// StringToCodeOaci

const regexp = /^LF[A-Z]{2}/;
const stringtoCodeOaci = (string) => regexp.exec(string);
const getFromRegex = (fn) => R.pipe(fn, R.head); // Prd que la tete du execs car il retourne plusieurs trucs
const logMethod = (string) => R.pipe(R.concat(string)); // Tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

const recupCodeOaci = (string) =>
  R.pipe(
    getFromRegex(stringtoCodeOaci),
    logMethod('Metar de l aerodrome ')
  )(string);

// String to file json

const stringToJson = JSON.stringify;
const writeJson1 = (file) => (data) => fs.writeJson(file, data);
const jsonToJsonFile = R.pipe(stringToJson, writeJson1('metar.json'));

console.log(
  jsonToJsonFile(
    recupCodeOaci(
      'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
    )
  )
);
