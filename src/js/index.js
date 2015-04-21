var React = require("react");

// load the translations
var translations = require("./translations");

// temporary work-around until React 1.0 for tap events
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;


var Base = require("./routes/base.js");
var Home = require("./routes/home.js");
var School = require("./routes/school.js");
var SchoolOverview = require("./routes/school-overview");
var routes = (
  <Route handler={Base} path="/">
    <DefaultRoute handler={Home} />
    <Route name="school" handler={School}>
      <Route name="school-overview" path="/school/:schoolId" handler={SchoolOverview} />
    </Route>
  </Route>
);

//Router.HistoryLocation
Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
