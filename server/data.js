var csv = require("csv");
var Q = require("kew");
var _ = require("lodash");

exports.raw = function() {
    var deferred = Q.defer();

    csv.parse(data, function(err, data){
      if(err) deferred.reject(err);
      else deferred.resolve(data);
    });
    return deferred.promise;
}

exports.schools = function() {
  return exports.raw
    .then(function(raw){
      return _(raw).map(function(row, i){
        return {
          id: i
        }
      })
    });
}
