var React = require("react");
var Panel = require("react-bootstrap").Panel;

module.exports = React.createClass({
  render: function() {
      return <Panel header={<h2>Media</h2>}>
              <p>Media</p>
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
