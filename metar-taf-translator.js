// Traducteur Metar et TAF en language parle

// METAR: LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO 22012G22KT=

// String to file json
const R = require('ramda');
const fs = require('fs-extra');

const stringToJson = JSON.stringify;
const writeJson = (file) => (data) => fs.writeJson(file, data);

const jsonToJsonFile = R.pipe(stringToJson, writeJson('metar.json'));

console.log(
  jsonToJsonFile('LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO')
);
