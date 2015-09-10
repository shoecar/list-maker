var React = require('react');
var Router = require('react-router');
var App = require('./App.jsx');
var ListsView = require('./lists_view/View.jsx');
var ListPage = require('./list_page/View.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute name='lists' handler={ListsView} />
    <Route name='listPage' path='/lists/:listId' handler={ListPage} />
  </Route>
);
