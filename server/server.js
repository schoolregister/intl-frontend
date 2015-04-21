var mach = require('mach');
var app = mach.stack();

var _ = require("lodash");
var dynamodb = require("./dynamodb");

// JSON 200 OK
function OK(conn){
	return function(data) {
		conn.json(200, data);
	}
};

var allowed = [
	'http://localhost:5005',
	'http://localhost:5000'
];

function cors(app) {
  return function (conn) {
    return conn.call(app).then(function () {
				var o = conn.request.headers.Origin
				if(allowed.indexOf(o) == 0)
				{
					console.log(o);
					conn.response.setHeader('Access-Control-Allow-Origin', o);
	        conn.response.setHeader('Access-Control-Allow-Credentials', true);
				}
    });
  };
}

app.use(cors);

app.use(mach.logger);
app.use(mach.params);

app.get('/ping', function(conn){
	return conn.json(200, {ok: true})
		// .anchors()
		// .then(OK(conn));
});

app.get('/school/:id', function(conn){
	var id = conn.params.id;
	return dynamodb
		.getSchool(id)
		.then(OK(conn));
});

app.get('/schools', function(conn){
	return dynamodb
		.getSchools()
		.then(OK(conn));
});

app.use(mach.file, {
	root: process.cwd() + '/../dist/',
	index: 'index.html',
	useLastModified: true
});

mach.serve(app);
