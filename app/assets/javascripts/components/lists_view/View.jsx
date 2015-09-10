var React = require('react');
// var Lists = require('./Lists.jsx');
var List = require('./List.jsx');
var ListForm = require('./ListForm.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {lists: []};
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
      // <div className="lists-view">
      //   <Lists data={this.state.data} />
      // </div>
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
