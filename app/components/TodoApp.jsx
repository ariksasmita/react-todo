var React = require('react')

var TodoList = require('TodoList')
var AddTodo = require('AddTodo')

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
  handleAddTodo: function (text) {
    console.log('New Todo: ', text)
  },
  render: function() {
    var { todos } = this.state
    return (
      <div>
        Todo App
        <TodoList todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    )
  }
})

module.exports = TodoApp
