var React = require("react");

var TranslatedLabel = require("../components/label");
var Value = require("../components/value");

module.exports = React.createClass({
  propTypes: {
    school: React.PropTypes.object.isRequired,
    field:  React.PropTypes.string.isRequired,
    handler: React.PropTypes.func,
  },

  render: function()
  {
    return (<div className="property">
        <b><TranslatedLabel field={this.props.field} />: </b>
        <Value
          field={this.props.field}
          handler={this.props.handler}
          data={this.props.school} />
      </div>)
  }
});
