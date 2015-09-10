var React = require('react');
var List = require('./List.jsx');
var ListForm = require('./ListForm.jsx');
var Reqwest = require('reqwest');

module.exports = React.createClass({

  getInitialState: function() {
    return { lists: this.props.data };
  },

  componentDidMount: function() {
    this.readListsFromAPI();
  },

  readListsFromAPI: function () {
    Reqwest({
      url: 'http://localhost:3000/api/lists/',
      type: 'JSON',
      method: 'GET',
      contentType: 'application/json',
      success: function(lists) {
        this.setState({ data: JSON.parse(lists.response).lists });
      }.bind(this),
      error: function(error) {
      }
    });
  },

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
          {this.state.lists.map(function (list) {
            return <List key={list.id} list={list}
                          handleDeleteList={this.deleteList}/>
          }.bind(this))}
        </ul>

        <ListForm handleNewList={this.addList} />
      </div>
    );
  }
});
