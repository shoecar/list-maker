require('../stylesheets/application.scss');

var React = require('react');
var Router = require('react-router');
var routes = require('./components/routes.jsx');

Router.run(routes, function(Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
