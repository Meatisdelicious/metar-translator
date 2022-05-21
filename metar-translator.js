// Traducteur Metar et TAF en language parle

// METAR: LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

import * as R from 'ramda';
import fs from 'fs-extra';

// En fonctionnel : Force vent Metar

const regexp10 = /\d{5}kt/gi;
const regexpp10 = /\d{2}kt/gi;

const regExpApplier = (reg) => (string_) => reg.exec(string_); // Applique le regexp au string
const recupVentMetarPart = regExpApplier(regexp10);
const recupVentMetarFull = regExpApplier(regexpp10);
const recupVentMetarFullFull = R.pipe(recupVentMetarPart, recupVentMetarFull);
const createString10 = (value) => `de ${value}`;
const getFromRegexp10 = (fn) => R.pipe(fn, R.head);

const recupFcForceVent = (string_) =>
  R.pipe(getFromRegexp10(recupVentMetarFullFull), createString10)(string_);

// En fonctionnel : cap vent Metar

const regexp9 = /\d{5}kt/gi;
const regexpp9 = /\d{3}/gi;

const recupCapMetarPart = regExpApplier(regexp9);
const recupCapMetarFull = regExpApplier(regexpp9);
const recupCapMetarFullFull = R.pipe(recupCapMetarPart, recupCapMetarFull);
const createString9 = (value) => `Vent au ${value}°`;
const getFromRegexp9 = (fn) => R.pipe(fn, R.head);

const recupFcCapVent = (string_) =>
  R.pipe(getFromRegexp9(recupCapMetarFullFull), createString9)(string_);

// En fonctionnel : heure Metar

const regexp8 = /\d{4}z/gi;

const recupHeureMetar = regExpApplier(regexp8);
const createString8 = (value) => `à ${value}ulu`;
const getFromRegexp8 = (fn) => R.pipe(fn, R.head);

const recupFcHeureMetar = (string_) =>
  R.pipe(getFromRegexp8(recupHeureMetar), createString8)(string_);

// En fonctionnel : Date Metar

const regexp2emeT = /\d{2}/gi;

const recupDateMetarFull = regExpApplier(regexp2emeT);
const createString = (value) => `Fait le ${value} `; // Crée et met la valeur dans la string
const getFromRegexp2emeT = (fn) => R.pipe(fn, R.head); // Prd que la tete du execs car il retourne plusieurs trucs

const recupFcDateMetar = (string_) =>
  R.pipe(getFromRegexp2emeT(recupDateMetarFull), createString)(string_);

// En fonctionnel : Conditions particulières

const regexp6 = /t[a-z]{4}/gi;

const recupConditionPart = (string_) => regexp6.exec(string_);
const getFromRegex6 = (fn) => R.pipe(fn, R.head);
const logMethod6 = (string_) => R.pipe(R.concat(string_));

const recupFcConditionsPart = (string_) =>
  R.pipe(
    getFromRegex6(recupConditionPart),
    logMethod6('Conditions particulières de type : ')
  )(string_);
// En fonctionnel : Temperature au point de rosée

const regexp5 = /\/\d{2}/gi;
const regexpp5 = /\d{2}/gi;

const recupTempeRpart1 = regExpApplier(regexp5);
const recupTempeRpart2 = regExpApplier(regexpp5);
const recupTempeRose = R.pipe(recupTempeRpart1, recupTempeRpart2);
const getFromRegex5 = (fn) => R.pipe(fn, R.head);
const logMethod5 = (string_) => R.pipe(R.concat(string_));

const recupFcTempeRose = (string_) =>
  R.pipe(
    getFromRegex5(recupTempeRose),
    logMethod5('Temperature au point de rosée (°C) de : ')
  )(string_);

// En fonctionnel : Temperature Maximale

const regexp4 = /\d{2}\//gi;
const regexpp4 = /\d{2}/gi;

const recupTempePart = regExpApplier(regexp4);
const recupTempePart2 = regExpApplier(regexpp4);
const recupTempeMax = R.pipe(recupTempePart, recupTempePart2);
const getFromRegex4 = (fn) => R.pipe(fn, R.head);
const logMethod4 = (string_) => R.pipe(R.concat(string_));

const recupFcTempeMax = (string_) =>
  R.pipe(
    getFromRegex4(recupTempeMax),
    logMethod4('Temperature maximale (°C) de : ')
  )(string_);

// En fonctionnel : Pression

const regexp3 = /q\d{4}/gim;
const recupPression = (string_) => regexp3.exec(string_);
const getFromRegex3 = (fn) => R.pipe(fn, R.head);
const logMethod3 = (string_) => R.pipe(R.concat(string_));

const recupFcPression = (string_) =>
  R.pipe(
    getFromRegex3(recupPression),
    logMethod3('Pression (Hpa) de ')
  )(string_);

// En fonctionnel : Type de metar

const regexp2 = /a[a-z]{3}/gim;
const recupTypeMetar = (string_) => regexp2.exec(string_);
const getFromRegex2 = (fn) => R.pipe(fn, R.head);
const logMethod2 = (string_) => R.pipe(R.concat(string_));

const recupFcTypeMetar = (string_) =>
  R.pipe(getFromRegex2(recupTypeMetar), logMethod2(' de type : '))(string_);

// StringToCodeOaci

const regexp1 = /^LF[A-Z]{2}/;
const stringtoCodeOaci = (string_) => regexp1.exec(string_);
const getFromRegex1 = (fn) => R.pipe(fn, R.head); // Prd que la tete du execs car il retourne plusieurs trucs
const logMethod1 = (string_) => R.pipe(R.concat(string_)); // Tap retourne exactement la mm valeur que l'entrer de facon a pouvoir mettre des console.log()

const recupFcCodeOaci = (string_) =>
  R.pipe(
    getFromRegex1(stringtoCodeOaci),
    logMethod1('Metar de l aerodrome ')
  )(string_);

// String to file json

const writeJson1 = (file) => (data) => fs.writeJson(file, data);
const jsonToJsonFile = writeJson1('metar.json');

// On applique toutes les fonctions afin de traiter le Metar

const traduceMetar = R.pipe(
  R.applySpec({
    codeOaci: recupFcCodeOaci,
    dateMetar: recupFcDateMetar,
    heureMetar: recupFcHeureMetar,
    typeMetar: recupFcTypeMetar,
    capVent: recupFcCapVent,
    forceVent: recupFcForceVent,
    tempeMax: recupFcTempeMax,
    tempeRose: recupFcTempeRose,
    laPression: recupFcPression,
    conditionsPart: recupFcConditionsPart
  }),
  R.tap(jsonToJsonFile)
);

console.log(
  traduceMetar(
    'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
  )
);

console.log(
  recupFcCodeOaci(
    'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT='
  )
);
// Autre Metar à tester :
// LFPX 181600Z AUTO 1005KT 120V200 CAVOK 19/10 Q1005 TEMPO 22012G22KT=

export {recupFcCodeOaci};
export {recupFcTypeMetar};
