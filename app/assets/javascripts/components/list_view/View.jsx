var React = require('react');
var Lists = require('./Lists.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {data: []};
  },

  componentDidMount: function() {
    this.setState( {data: [{id: 2, name: 'and another fake blab'},
                           {id: 1, name: 'this is a fake blab'}] } );
  },

  render: function () {
    return (
      <div className="lists-view">
        <Lists data={this.state.data} />
      </div>
    );
  }
});
