var React = require('react');

module.exports = React.createClass({
  handleDelete: function (e) {
    $.ajax({
      method: 'DELETE',
      url: '/api/lists/' + this.props.list.id,
      dataType: 'JSON',
      success: function () {
        this.props.handleDeleteList(this.props.list);
      }.bind(this)
    });
  },

  render: function () {
    return(
      <li className="list-item">
        <h3>{this.props.name}</h3>
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
});
