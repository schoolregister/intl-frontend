var React = require("react");

// example
// <Val field="city" data={row}/>

module.exports = React.createClass({
  render: function(){
    var data = this.props.data[this.props.field];
    var Handler = this.props.handler;

    if(this.props.json)
      return <pre>{JSON.stringify(data, null, 2)}</pre>

    if(Handler)
      return <Handler data={data} />;

    return <span>{data}</span>;
  }
});
