var React = require('react');
var View = require('./list_view/View.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="content">
        <View/>
      </div>
    );
  }
});
