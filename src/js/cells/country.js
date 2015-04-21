var React = require("react");

var TranslatedLabel = require("../components/label");
var Value = require("../components/value");

module.exports = React.createClass({
  propTypes: {
    school: React.PropTypes.object.isRequired
  },

  render: function()
  {
    return (<div>
        <i className="fa fa-globe"></i>
        <TranslatedLabel field="country"/>
        <Value field="country" data={this.props.school}/>
      </div>)
  }
});
