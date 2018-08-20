var React = require('react')
var moment = require('moment')

var Todo = React.createClass({
  onToggleItem: function(id) {
    var { id, onToggle } = this.props
    onToggle(id)
  },
  render: function() {
    var {
      text,
      completed,
      createdAt,
      completedAt,
    } = this.props
    var renderDate = () => {
      var message = 'Created '
      var timestamp = createdAt

      if (completed) {
        message = 'Completed '
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div onClick={ this.onToggleItem }>
        <input type="checkbox" checked={ completed } readOnly />
        <p>{ text }</p>
        <p>{ renderDate() }</p>
      </div>
    )
  },
})

module.exports = Todo
