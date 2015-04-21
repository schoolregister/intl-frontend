/*
{
    "brin": "15IT",
    "category": "Publieke school",
    "country": "nl",
    "denomination": "Protestants-Christelijk",
    "e-mail": "info@cosdewereld.nl",
    "facebook": "-",
    "id": "e090e9cf9bc6",
    "language": "Nederlands",
    "latitude": "51.9324038",
    "locationType": "-",
    "longitude": "4.4598204",
    "method": "Regulier",
    "municipality": "Rotterdam",
    "phase": "Primair onderwijs",
    "title": "COS De Wereld",
    "twitter": "-",
    "vestiging": "15IT00",
    "website": "www.cosdewereld.nl"
}
*/

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
        <b><TranslatedLabel field="city"/>: </b>
        <span className="value">
          <Value field="municipality" data={this.props.school}/>
        </span>
      </div>)
  }
});
