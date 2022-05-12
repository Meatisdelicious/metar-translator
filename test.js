/*
function upper_case(str)
 {
     regexp = /[A-Z]/;
     console.log(regexp.test(str));
     console.log("Métar de l'aerodrome", regexp );

 }
 upper_case("LFPN");
*/

/*
function string_To_Json(stringData) {
    let jsonData = JSON.stringify(stringData);
    //return console.log(jsonData);
    return jsonData;
};
string_To_Json("LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO");
*/
/*
// Programmation fonctionnelle
const R = require('ramda');
const fs = require('fs');

const string_To_Json = JSON.stringify;
const create_Json = fs.writeFile('metar.json');
const string_to_Json_File = R.pipe(string_To_Json);

console.log(
  string_to_Json_File(
    'LFPN 101400Z AUTO 22015KT 170V250 CAVOK 28/12 Q1017 TEMPO'
  )
);
*/
//var fs = require('fs');
//fs.writeFile("thing.json", dictstring);

var fs = require('fs');
fs.writeFile('thing.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});
