/*
function upper_case(str)
 {
     regexp = /[A-Z]/;
     console.log(regexp.test(str));
     console.log("Métar de l'aerodrome", regexp);
}
 upper_case("LFPN");

// Programmation simple : String to file json
function string_To_Json(stringData) {
  let jsonData = JSON.stringify(stringData);
  //return console.log(jsonData);
  return jsonData;
}
const fs = require('fs');
fs.writeFile(
  'metar.json',
  string_To_Json('LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO'),
  function (err, result) {
    if (err) console.log('error', err);
  }
);
// Programmation Fonctionnelle : String to file json
const R = require('ramda');
const fs = require('fs-extra');

const stringToJson = JSON.stringify;
const writeJson = (file) => (data) => fs.writeJson(file, data);

const jsonToJsonFile = R.pipe(stringToJson, writeJson('metar.json'));

console.log(
  jsonToJsonFile('LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO')
);

// En normal : codeOaci
function codeOaci(str) {
  const regexp = /^LF[A-Z]{2}/;
  resultat = regexp.exec(str);
  //console.log("Métar à l'aerodrome", resultat);
  return resultat;
}
codeOaci(
  'LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
);
// En fonctionnel : codeOaci
import * as R from 'ramda';
const regexp = /^LF[A-Z]{2}/;
const recupCodeOaci = (str) => regexp.exec(str);
const getFromRegex = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex(recupCodeOaci),
  logMethod('Le Metar de l aerodrome ')
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
