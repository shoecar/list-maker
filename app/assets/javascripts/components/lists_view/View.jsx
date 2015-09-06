var React = require('react');
var Lists = require('./Lists.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function() {
    this.readListsFromAPI();
  },

  readListsFromAPI: function () {
    this.props.readFromAPI(this.props.origin + '/api/lists', function (lists) {
      this.setState({ data: JSON.parse(lists.response).lists });
    }.bind(this));
  },

  render: function () {
    return (
      <div className="lists-view">
        <Lists data={this.state.data} />
      </div>
    );
  }
});
