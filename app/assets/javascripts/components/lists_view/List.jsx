var React = require('react');
var Router = require('react-router');
var Reqwest = require('reqwest');
var Link = Router.Link;

module.exports = React.createClass({
  handleDelete: function (e) {
    Reqwest({
      url: 'http://localhost:3000/api/lists/' + this.props.list.id,
      type: 'JSON',
      method: 'DELETE',
      contentType: 'application/json',
      success: function() {
        this.props.handleDeleteList(this.props.list);
      }.bind(this),
      error: function(error) {
      }
    });
  },

  render: function () {
    return(
      <li className="list-item">
        <h3><Link to='listPage' params={{listId: this.props.list.id}}>
          {this.props.list.name}
        </Link></h3>
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
});
