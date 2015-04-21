var React = require("react");

var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Bootstrap = require("react-bootstrap");
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;

var NAW = require("../widgets/naw");
var Stats = require("../widgets/stats");
var Media = require("../widgets/media");

// var api = require("../api");
var API = require("../mock");

// a,b
// a+b

// - select continent
// - select country

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {school: {}};
  },

  componentDidMount: function() {
    var id = this.context.router.getCurrentParams().schoolId;
    // api.r('/school/' + id, {}, function(data){
    //   this.setState({school: data})
    // }.bind(this));
    API.school(id)
      .then(function(data){
        this.setState({school: data})
      }.bind(this));
  },

  render: function(){
    if(this.state.school === {})
      return <p>loading</p>

    return <Grid>
      <Row className='show-grid'>
        <Col xs={12} md={4}>
          <NAW school={this.state.school}/>
        </Col>
        <Col xs={12} md={4}>
          <Stats />
        </Col>
        <Col xs={12} md={4}>
          <Media />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Col>
      </Row>
    </Grid>
  }
})
