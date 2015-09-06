var React = require('react');
var List = require('./List.jsx');
var ListForm = require('./ListForm.jsx');

module.exports = React.createClass({
  addList: function (list) {
    $.ajax({
      url: '/api/listings',
      type: 'POST',
      data: { listing: { user_id: USER.id, list_id: list.id }}
    });
    this.state.lists.push(list);
    this.setState({ lists: this.state.lists });
  },

  deleteList: function (list) {
    var index = this.state.lists.indexOf(list);
    this.state.lists.splice(index, 1);
    this.setState({ lists: this.state.lists });
  },

  render: function () {
    return(
      <div className="lists">
        <h2>Lists</h2>

        <ul className="list-items">
          {this.props.data.map(function (list) {
            return <List key={list.id} name={list.name}
                          handleDeleteList={this.deleteList}/>
          }.bind(this))}
        </ul>

        <ListForm handleNewList={this.addList} />
      </div>
    );
  }
});
