var React = require("react");
var Translate = require('react-translate-component');

// var Greeter = React.createClass({
//   render: function() {
//     return <Translate {...this.props} content="example.greeting" />;
//   }
// });

module.exports = React.createClass({
    render: function() {
        // return <p>{this.props.label}</p>
        return <Translate {...this.props} className="sr-label" content={"labels." + this.props.field} />;
    }
});
