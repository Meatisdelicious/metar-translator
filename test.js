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

// En fonctionnel : Temperature au point de rosée
// import * as R from 'ramda';
const regexp5 = /\/[0-9]{2}/gi;
const recupTempeRose = (str) => regexp5.exec(str);
const getFromRegex5 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod5 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex5(recupTempeRose),
  logMethod5('Temperature au point de rosée (°C) de : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Temperature ambiante
// import * as R from 'ramda';
const regexp4 = /[0-9]{2}\//gi;
const recupTempeMax = (str) => regexp4.exec(str);
const getFromRegex4 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod4 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex4(recupTempeMax),
  logMethod4('Temperature maximale (°C) de : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Pression
// import * as R from 'ramda';
const regexp3 = /Q[0-9]{4}/gim;
const recupPression = (str) => regexp3.exec(str);
const getFromRegex3 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod3 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex3(recupPression),
  logMethod3('Pression (Hpa) de ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');


// En fonctionnel : heure Metar

import * as R from 'ramda';
const regexp8 = /[0-9]{4}Z/gi;

const regExpApplier8 = (reg) => (str) => reg.exec(str);
const recupHeureMetar = regExpApplier8(regexp8);
const createString8 = (val) => `à ${val}ulu`;
const getFromRegexp8 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp8(recupHeureMetar),
  createString8,
  R.tap(console.log)
  // logMethod7('fait le ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Date Metar

// import * as R from 'ramda';
const regexp2emeT = /[0-9]{2}/gi;

const regExpApplier = (reg) => (str) => reg.exec(str);
const recupDataMetarFull = regExpApplier(regexp2emeT);
const createString = (val) => `Fait le ${val} `; // crée et met la valeur dans la string
const getFromRegexp2emeT = (fn) => R.pipe(fn, R.head); // prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp2emeT(recupDataMetarFull),
  createString,
  R.tap(console.log)
  // logMethod7('fait le ')
)('LFPX 101400 AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');


// En fonctionnel : cap vent Metar

// import * as R from 'ramda';
const regexp9 = /[0-9]{5}KT/gi;
const regexpp9 = /[0-9]{3}/gi;

const regExpApplier9 = (reg) => (str) => reg.exec(str);
const recupCapMetarPart = regExpApplier9(regexp9);
const recupCapMetarFull = regExpApplier9(regexpp9);
const recupCapMetarFullFull = R.pipe(recupCapMetarPart, recupCapMetarFull);
const createString9 = (val) => `Vent au ${val}°`;
const getFromRegexp9 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp9(recupCapMetarFullFull),
  createString9,
  R.tap(console.log)
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');



// En fonctionnel : Force vent Metar

// import * as R from 'ramda';
import * as R from 'ramda';

const regexp10 = /[0-9]{5}KT/gi;
const regexpp10 = /[0-9]{2}KT/gi;

const regExpApplier10 = (reg) => (str) => reg.exec(str);
const recupVentMetarPart = regExpApplier10(regexp10);
const recupVentMetarFull = regExpApplier10(regexpp10);
const recupVentMetarFullFull = R.pipe(recupVentMetarPart, recupVentMetarFull);
const createString10 = (val) => `de ${val}`;
const getFromRegexp10 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp10(recupVentMetarFullFull),
  createString10,
  R.tap(console.log)
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

*/

/*
// En fonctionnel : Date Metar

import * as R from 'ramda';
//const regexp7 = /[0-9]{6}\Z/gi;
const regexp2emeT = /[0-9]{2}/gi;

const regExpApplier = (reg) => (str) => reg.exec(str);
//const recupDateMetarPart = regExpApplier(regexp7);
const recupDataMetarFull = regExpApplier(regexp2emeT);
const createString = (val) => `Fait le ${val} à `;
const getFromRegexp2emeT = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
//const logMethod7 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegexp2emeT(recupDataMetarFull),
  createString,
  R.tap(console.log)
  // logMethod7('fait le ')
)('LFPX 101400 AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');
 */

/*
// Traducteur Metar et TAF en language parle

// METAR: LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

import * as R from 'ramda';
import fs from 'fs-extra';

// En fonctionnel : Force vent Metar

// import * as R from 'ramda';
const regexp10 = /[0-9]{5}KT/gi;
const regexpp10 = /[0-9]{2}KT/gi;

const regExpApplier10 = (reg) => (str) => reg.exec(str);
const recupVentMetarPart = regExpApplier10(regexp10);
const recupVentMetarFull = regExpApplier10(regexpp10);
const recupVentMetarFullFull = R.pipe(recupVentMetarPart, recupVentMetarFull);
const createString10 = (val) => `de ${val}`;
const getFromRegexp10 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp10(recupVentMetarFullFull),
  createString10,
  R.tap(console.log)
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : cap vent Metar

// import * as R from 'ramda';
const regexp9 = /[0-9]{5}KT/gi;
const regexpp9 = /[0-9]{3}/gi;

const regExpApplier9 = (reg) => (str) => reg.exec(str);
const recupCapMetarPart = regExpApplier9(regexp9);
const recupCapMetarFull = regExpApplier9(regexpp9);
const recupCapMetarFullFull = R.pipe(recupCapMetarPart, recupCapMetarFull);
const createString9 = (val) => `Vent au ${val}°`;
const getFromRegexp9 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp9(recupCapMetarFullFull),
  createString9,
  R.tap(console.log)
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : heure Metar

// import * as R from 'ramda';
const regexp8 = /[0-9]{4}Z/gi;

const regExpApplier8 = (reg) => (str) => reg.exec(str);
const recupHeureMetar = regExpApplier8(regexp8);
const createString8 = (val) => `à ${val}ulu`;
const getFromRegexp8 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp8(recupHeureMetar),
  createString8,
  R.tap(console.log)
  // logMethod7('fait le ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Date Metar

// import * as R from 'ramda';
const regexp2emeT = /[0-9]{2}/gi;

const regExpApplier = (reg) => (str) => reg.exec(str);
const recupDataMetarFull = regExpApplier(regexp2emeT);
const createString = (val) => `Fait le ${val} `; // crée et met la valeur dans la string
const getFromRegexp2emeT = (fn) => R.pipe(fn, R.head); // prd que la tete du execs car il retourne plusieurs trucs

R.pipe(
  getFromRegexp2emeT(recupDataMetarFull),
  createString
)('LFPX 101400 AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Conditions particulières
//import * as R from 'ramda';
const regexp6 = /T[A-Z]{4}/gi;
const recupConditionPart = (str) => regexp6.exec(str);
const getFromRegex6 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod6 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex6(recupConditionPart),
  logMethod6('Conditions particulières de type : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Temperature au point de rosée
// import * as R from 'ramda';
const regexp5 = /\/[0-9]{2}/gi;
const recupTempeRose = (str) => regexp5.exec(str);
const getFromRegex5 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod5 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex5(recupTempeRose),
  logMethod5('Temperature au point de rosée (°C) de : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Temperature Max
// import * as R from 'ramda';
const regexp4 = /[0-9]{2}\//gi;
const recupTempeMax = (str) => regexp4.exec(str);
const getFromRegex4 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod4 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex4(recupTempeMax),
  logMethod4('Temperature maximale (°C) de : ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Pression
// import * as R from 'ramda';
const regexp3 = /Q[0-9]{4}/gim;
const recupPression = (str) => regexp3.exec(str);
const getFromRegex3 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod3 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

R.pipe(
  getFromRegex3(recupPression),
  logMethod3('Pression (Hpa) de ')
)('LFPX 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=');

// En fonctionnel : Type de metar
// import * as R from 'ramda';
const regexp2 = /A[A-Z]{3}/gim;
const recupTypeMetar = (str) => regexp2.exec(str);
const getFromRegex2 = (fn) => R.pipe(fn, R.head); //prd que la tete du execs car il retourne plusieurs trucs
const logMethod2 = (string) => R.tap(R.pipe(R.concat(string), console.log)); //tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

const recupFcTypeMetar = (string) =>
  R.pipe(getFromRegex2(recupTypeMetar), logMethod2(' de type : '))(string);

// StringToCodeOaci

const regexp1 = /^LF[A-Z]{2}/;
const stringtoCodeOaci = (string) => regexp1.exec(string);
const getFromRegex1 = (fn) => R.pipe(fn, R.head); // Prd que la tete du execs car il retourne plusieurs trucs
const logMethod1 = (string) => R.pipe(R.concat(string)); // Tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

const recupCodeOaci = (string) =>
  R.pipe(
    getFromRegex1(stringtoCodeOaci),
    logMethod1('Metar de l aerodrome ')
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

 */
