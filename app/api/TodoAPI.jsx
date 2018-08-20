var $ = require('jquery')

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos')
    var todos = []

    try {
      todos = JSON.parse(stringTodos)
    } catch (e) {
      // if fails, do nothing
    }

    return $.isArray(todos) ? todos : []
  },
  filterTodos: function(todos, showCompleted, searchTest) {
    var filteredTodos = todos

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })
    
    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchTest.length === 0 ? true : todo.text.toLowerCase().indexOf(searchTest) >= 0
    })
    
    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1
      }
      if (a.completed && !b.completed) {
        return 1
      }
      return 0
    })

    return filteredTodos
  }
}
