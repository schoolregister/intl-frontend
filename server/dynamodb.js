var Dynamite = require('dynamite')
var options = require("../config")

options.region = 'eu-west-1';
options.sslEnabled = true;

var client = new Dynamite.Client(options)

exports.getSchool = function(id)
{
  return client
    .getItem('schoolregister-schools')
    .setHashKey('id', id)
    .setRangeKey('country', 'nl')
    .execute()
    .then(function(data){
      return data.result;
    })
}

exports.getSchools = function(id)
{
  return client
    .newScanBuilder('schoolregister-schools')
    .setLimit(20)
    .execute()
    .then(function(data){
      return data.result;
    })
}
