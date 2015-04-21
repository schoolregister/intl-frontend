var React = require("react");

var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Button = require("react-bootstrap").Button;

// - select continent
// - select country

// <ButtonLink to="school" param={{schoolId: 123}}>school 123</ButtonLink>

module.exports = React.createClass({
  render: function(){
    return <div>
      <h2>Home</h2>
      <RouteHandler />
      <ul>
      <li><Link to="school-overview" params={{schoolId: 'e090e9cf9bc6'}}>School e090e9cf9bc6</Link></li>
      <li><Link to="school-overview" params={{schoolId: 'e3baed128441'}}>School e3baed128441</Link></li>
      <li><Link to="school-overview" params={{schoolId: '76175fc3aafb'}}>School 76175fc3aafb</Link></li>
      </ul>
    </div>;
  }
})
