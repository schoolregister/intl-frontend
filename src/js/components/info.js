var React = require("react");

module.exports = React.createClass({
    render: function() {
      return <div>
        <b>Phase:</b> <code>{this.props.phase}</code>
        <b>Country:</b> <code>{this.props.country}</code>

        <hr />
        <p>If this property must always be set,
          it determines the interface language.</p>
        <b>Language:</b> <code>{this.props.lang}</code>

        <hr />
        <p>If this property is set, a school should be shown</p>
        <b>School ID:</b> <code>{this.props.school}</code>
      </div>
    }
});
