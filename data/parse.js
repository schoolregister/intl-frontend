var _ = require("lodash");
var fs = require("fs");
var csv = require("fast-csv");
var Q = require("kew");
var pp = require("prettyjson");



var d = 'data/PO-schoolvestigingen.csv';
var stream = fs.createReadStream(d);

/*
 { Vestigingsnummer: '21DL00',
  'ACVTIEF TOT': '',
  'BRIN nummer': '21DL',
  Accountnaam: 'Basisschool de Regenboog',
  'Correspondentie-huisnr': '236',
  Gemeente: 'Baarle-Nassau',
  'Geo Locatie (Latitude)': '51.4114053',
  'Geo Locatie (Longitude)': '4.9985391',
  'Type Locatie': 'Hoofdvestiging',
  Taal: 'Nederlands',
  'Geslacht directeur': '',
  'Naam Directeur': '',
  Contactpersoon: '',
  'Email directie': '',
  'Email beheerder': '',
  Bestuur: 'Stichting OPMAAT',
  Schooltype: 'Primair onderwijs',
  'Soort onderwijs': 'Regulier Basisonderwijs (BAO)',
  Streng_Vrij: '',
  Telefoon: '0135079146',
  'Email school': 'obs.de.regenboog@opmaat-scholen.nl',
  Facebook: '',
  Website: 'www.opmaat-scholen.nl',
  'Twitter naam': '',
  'Correspondentie-Land': 'Nederland',
  'Correspondentie-postcode': '5110 AE',
  'Correspondentie-straat': 'Postbus',
  'Correspondentie-woonplaats': 'BAARLE-NASSAU',
  'Brede School?': 'Nee',
  Categorie: 'Publieke school',
  Denominatie: 'Openbaar',
  Onderwijsmethode: 'Regulier',
  Populatie: 'Gemengd Onderwijs',
  Cluster: '',
  'Vestiging - huisnr': '8',
  'Vestiging - Land': 'Nederland',
  'Vestiging - straat': 'Schoolstraat',
  'Vestiging - woonplaats': 'BAARLE-NASSAU',
  'Vestiging - postcode': '5111 XP' } */

var map = {
	'Vestigingsnummer': 'vestiging',
	'BRIN nummer': 'brin',
	'Accountnaam': 'title',
	'Geo Locatie (Latitude)': 'latitude',
	'Geo Locatie (Longitude)': 'longitude',
	'Schooltype': 'phase',
	'Taal': 'language',
	'Gemeente': 'municipality',
	'Type Locatie': 'locationType',
	'Categorie': 'category',
	'Denominatie': 'denomination',
	'Onderwijsmethode': 'method',
	'Email school': 'e-mail',
	'Facebook': 'facebook',
	'Website': 'website',
	'Twitter naam': 'twitter'
/*
	'Geslacht directeur': '',
	'Naam Directeur': '',
	Contactpersoon: '',
	'Email directie': '',
	'Email beheerder': '',
	Bestuur: 'Stichting OPMAAT',
	'Brede School?': 'Nee',
	Populatie: 'Gemengd Onderwijs',
	Cluster: '',
	'Soort onderwijs': 'Regulier Basisonderwijs (BAO)',
	Streng_Vrij: '',
	Telefoon: '0135079146',
	'Email school': 'obs.de.regenboog@opmaat-scholen.nl',
	Facebook: '',
	Website: 'www.opmaat-scholen.nl',
	'Twitter naam': '',
	'Vestiging - huisnr': '8',
	'Vestiging - Land': 'Nederland',
	'Vestiging - straat': 'Schoolstraat',
	'Vestiging - woonplaats': 'BAARLE-NASSAU',
	'Vestiging - postcode': '5111 XP'
	'Correspondentie-huisnr': 'nr',
	'Correspondentie-Land': 'Nederland',
	'Correspondentie-postcode': '5110 AE',
	'Correspondentie-straat': 'Postbus',
	'Correspondentie-woonplaats': 'BAARLE-NASSAU',
*/
}

var crypto = require('crypto');

function mapCOLUMNS(row){
	var r = _(map)
		.reduce(function(acc, val, key){
			acc[map[key]] = row[key] || '-';
			return acc;
		},{});

	// compute ID hash
	var shasum = crypto.createHash('sha1');
	shasum.update(r.brin);
	shasum.update(r.vestiging);
	r.id = shasum.digest('hex').substr(0, 12);
	r.country = 'nl'
	
	return r;
}


var Dynamite = require('dynamite')
var options = require("./config")

options.region = 'eu-west-1';
options.sslEnabled = true;

var client = new Dynamite.Client(options)

var csvStream = csv({headers: true})
    .on("data", function(data){
		 var o = mapCOLUMNS(data);

		 client
			.putItem('schoolregister-schools', o)
			.execute()
			.then(function(result){
				console.log("----\nPUTTED => ", result, pp.render(o));
			})
			.fail(function(err){
				console.log("----\n", pp.render(err));
				console.log(err);
			});
    })
    .on("end", function(){
         console.log("done");
    });

stream.pipe(csvStream);

