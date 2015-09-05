var List = React.createClass({
  render: function () {
    return(
      <li className="col-sm-10 col-sm-offset-1 col-xs-12 list-item">
        <div className="col-xs-4">
          {this.props.list.name}
        </div>
        <div className="col-xs-4">
          <button className="btn btn-danger">Delete</button>
        </div>
      </li>
    );
  }
});
