var React = require('react')

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var textValue = this.refs.todo.value
    
    if (textValue.length > 0) {
      this.refs.todo.value = ''
      this.props.onAddTodo(textValue)
    } else {
      this.refs.todo.focus()
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={ this.handleSubmit }>
          <input ref="todo" type="text" placeholder="What do you want to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
})

module.exports = AddTodo
