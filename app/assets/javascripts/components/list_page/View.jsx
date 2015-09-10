var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function() {
    this.readListFromAPI();
  },

  readListFromAPI: function () {
    this.props.readFromAPI(this.props.origin + '/api/lists/' + this.props.params.listId, function (list) {
      this.setState({ data: JSON.parse(list.response) });
    }.bind(this));
  },

  render: function () {
    return (
      <div className="list-page">
        <Link to='lists'>Lists</Link>
        <h2>{this.state.data.name}</h2>
      </div>
    );
  }
});
