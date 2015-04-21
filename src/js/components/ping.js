
var React = require("react");
var Label = require("react-bootstrap").Label;
var api = require("../api");


module.exports = React.createClass({
  getInitialState: function() {
      return {ping: null}
  },
  componentDidMount: function() {
      api.r('/ping', {}, function(response){
          this.setState({ping: response});
      }.bind(this));
  },
  computeStyle: function(){
    if(this.state.ping)
      return this.state.ping.ok ? 'success' : 'danger';
    return 'default';
  },
  render: function(){
    return <Label bsStyle={this.computeStyle()}>PING</Label>;
  }
});
