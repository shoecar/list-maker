var ListForm = React.createClass({
  getInitialState: function () {
    return { name: '' };
  },

  valid: function () {
    return this.state.name;
  },

  handleChange: function (e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit: function (e) {
    e.preventDefault();
    $.post( '',
            { list: this.state },
            function (data) {
              this.props.handleNewList(data);
              this.setState(this.getInitialState());
            }.bind(this),
            'JSON'
    );
  },

  render: function () {
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control"
                 placeholder="Name" name="name"
                 value={this.state.name} onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"
                 disabled={!this.valid()}>
          </input>
        </div>
      </form>
    );
  }
});
