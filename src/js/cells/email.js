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
        <i class="fa fa-at"></i>
        <TranslatedLabel field="e-mail"/>
        <code><Value field="e-mail" data={this.props.school}/></code>
      </div>)
  }
});
