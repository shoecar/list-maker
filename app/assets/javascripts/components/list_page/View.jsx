var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function() {
    this.readListFromAPI();
  },

  readListFromAPI: function () {
    this.props.readFromAPI(this.props.origin + '/api/lists/', function (lists) {
      this.setState({ data: JSON.parse(lists.response).list });
    }.bind(this));
  },

  render: function () {
    return (
      <div className="list-page">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
});
