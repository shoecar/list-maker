var Lists = React.createClass({
  getInitialState: function () {
    return { lists: this.props.data };
  },

  getDefaultProps: function () {
    return { lists: [] };
  },

  addList: function (list) {
    // $.ajax({
    //   url: '/api/listings',
    //   type: 'POST',
    //   data: { listing: { user_id: USER.id, list_id: list.id }}
    // });
    this.state.lists.push(list);
    this.setState({ lists: this.state.lists });
  },

  render: function () {
    return(
      <div className="lists">
        <h2>Lists</h2>
        <ListForm handleNewList={this.addList} />
        <ul className="list">
          {this.state.lists.map(function (list) {
            return <List key={list.id} list={list}/>
          }.bind(this))}
        </ul>
      </div>
    );
  }
});
