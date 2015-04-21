var React = require("react");
var Panel = require("react-bootstrap").Panel;

module.exports = React.createClass({
  render: function() {
      return <Panel header={<h2>Statistieken</h2>}>
              <p>content here</p>
          </Panel>;
  }
})
