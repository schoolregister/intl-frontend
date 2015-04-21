var React = require("react");

// translation library
var counterpart = require('counterpart');

module.exports = React.createClass({
  handleChange: function(e) {
    counterpart.setLocale(e.target.value);
  },

  render: function() {
    return (
      <div>
        <span>Switch Locale:</span>
        <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
          <option>en</option>
          <option>nl</option>
        </select>
      </div>
    );
  }
});
