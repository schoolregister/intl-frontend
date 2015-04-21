
var request = require("request")

exports.r = function(resource, params, cb) {
    // alright, let's try it
    request
        .get({url: 'http://localhost:5000' + resource, qs: params},
        function(err, response, body) {
            console.log(err);
            if(response.statusCode !== 200 || err)
            {
                console.log("API request errored", resource, response.statusCode);
                return;
            }

            var b = JSON.parse(body);
            cb(b);
        });
};

var Q = require("kew");

exports.rp = function(resource, params)
{
  var deferred = Q.defer();
  request
      .get({url: 'http://localhost:5000' + resource, qs: params},
      function(err, response, body) {
        if(err)
          deferred.reject(err)
        else
          deferred.resolve(JSON.parse(body));
      });
  return deferred.promise;
}

exports.schools = function()
{
  return exports.rp('/schools', {});
}

exports.school = function(id)
{
  return exports.rp('/school', {id: id});
}
