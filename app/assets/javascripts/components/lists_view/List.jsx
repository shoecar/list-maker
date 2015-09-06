var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function () {
    return(
      <li className="list-item">
        <h3><Link to='listPage' params={{listId: 'this.props.id'}}>
          {this.props.name}
        </Link></h3>
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
});
