var React = require("react");

var Bootstrap = require("react-bootstrap");
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;

var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

// a,b
// a+b

// - select continent
// - select country

// <ButtonLink to="school" param={{schoolId: 123}}>school 123</ButtonLink>

module.exports = React.createClass({
  render: function(){
    return <div>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h2>School</h2>
          </Col>
        </Row>
      </Grid>
      <RouteHandler />
    </div>;
  }
})
