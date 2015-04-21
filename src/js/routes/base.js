var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Bootstrap = require("react-bootstrap");
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;

var LocaleSwitcher = require("../components/locale-switcher");
var Ping = require("../components/ping");
// <LocaleSwitcher />

module.exports = React.createClass({
  render: function(){
    return <div>
      <Grid>
        <Row>
          <Col xs={4} md={4}>
            <Ping />
          </Col>
          <Col xs={4} md={4}>
            <LocaleSwitcher />
          </Col>
        </Row>
      </Grid>

      <RouteHandler />
    </div>;
  }
})
