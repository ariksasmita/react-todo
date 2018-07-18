var React = require('react')

var Todo = React.createClass({
  onToggleItem: function(id) {
    var { id, onToggle } = this.props
    onToggle(id)
  },
  render: function() {
    var { text, completed } = this.props
    return (
      <div onClick={ this.onToggleItem }>
        <input type="checkbox" checked={ completed } readOnly />
        { text }
      </div>
    )
  },
})

module.exports = Todo
