var React = require('react');
var Reqwest = require('reqwest');
var View = require('./list_view/View.jsx');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {origin: 'http://localhost:3000' };
  },

  readFromAPI: function (url, successCallback) {
    Reqwest({
      url: url,
      type: 'JSON',
      method: 'get',
      contentType: 'application/json',
      success: successCallback,
      error: function (error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  render: function () {
    return (
      <div id="content">
        <View origin={this.props.origin} readFromAPI={this.readFromAPI} />
      </div>
    );
  }
});
