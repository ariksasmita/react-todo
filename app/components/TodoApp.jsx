var React = require('react')
var uuid = require('node-uuid')

var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoSearch = require('TodoSearch')

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false,
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true,
        },
        {
          id: uuid(),
          text: 'Make the bed',
          completed: true,
        },
        {
          id: uuid(),
          text: 'Feed yourself',
          completed: false,
        },
      ],
    }
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
        }
      ]
    })
  },
  handleSearch: function( showCompleted, searchText ) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    })
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos: updatedTodos,
    })
  },
  render: function() {
    var { todos } = this.state
    return (
      <div>
        Todo App
        <TodoSearch onSearch={ this.handleSearch } />
        <TodoList onToggle={ this.handleToggle } todos={ todos } />
        <AddTodo onAddTodo={ this.handleAddTodo } />
      </div>
    )
  }
})

module.exports = TodoApp
