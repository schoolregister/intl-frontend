var React = require("react");
var Panel = require("react-bootstrap").Panel;

var Property = require("../components/property");


var website_handler = React.createClass({
  render: function() {
    return <a href={'http://' + this.props.data}>{this.props.data}</a>;
  }
});

var email_handler = React.createClass({
  render: function() {
    return <a href={'mailto://' + this.props.data}>{this.props.data}</a>;
  }
});


module.exports = React.createClass({

  propTypes: {
    school: React.PropTypes.object.isRequired
  },

  render: function() {
      return <Panel header={<h2>NAW</h2>}>
        <Property field='country' school={this.props.school} />
        <Property field='phase' school={this.props.school} />
        <Property field='denomination' school={this.props.school} />

        <Property field='municipality' school={this.props.school} />
        <Property field='website' handler={website_handler} school={this.props.school} />
        <Property field='e-mail' handler={email_handler} school={this.props.school} />
        <Property field='twitter' school={this.props.school} />
        <Property field='facebook' school={this.props.school} />
      </Panel>;
  }
})


// module.exports = R.createClass({
//   render: function(){
//     return <Table responsive>
//             <tbody>
//               <tr>
//                 <td><b>Street</b></td>
//                 <td>{this.props.naw.street}</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Table cell</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Table cell</td>
//               </tr>
//             </tbody>
//           </Table>;
//   }
// })
