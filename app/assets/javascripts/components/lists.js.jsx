var Lists = React.createClass({
  getInitialState: function () {
    return { lists: this.props.data };
  },

  getDefaultProps: function () {
    return { lists: [] };
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
