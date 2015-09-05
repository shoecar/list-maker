var Lists = React.createClass({
  getInitialState: function () {
    return { lists: this.props.data };
  },

  getDefaultProps: function () {
    return { lists: [] };
  },

  render: function () {
    return(
      <div className="lists">
        <h2>Lists</h2>
        <ul className="list">
          {this.state.lists.map(function (list) {
            return <List key={list.id} list={list}/>
          }.bind(this))}
        </ul>
      </div>
    );
  }
});
