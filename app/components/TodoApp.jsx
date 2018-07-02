var React = require('react')

var TodoList = require('TodoList')

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        },
        {
          id: 2,
          text: 'Clean the yard',
        },
        {
          id: 3,
          text: 'Make the bed',
        },
        {
          id: 4,
          text: 'Feed yourself',
        },
      ],
    }
  },
  render: function() {
    var { todos } = this.state
    return (
      <div>
        Todo App
        <TodoList todos={ todos } />
      </div>
    )
  }
})

module.exports = TodoApp
