var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it("should exist", () => {
    expect(TodoApp).toExist()
  })

  it('should add Todo onHandleAddTodo', () => {
    var todoText = 'Test'
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({ todos: [] })
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos[0].text).toBe(todoText)
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })

  it('should toggle completed todo when handleToggle called', () => {
    var todoData = {
      id: 12,
      text: 'Test item',
      completed: false,
      createdAt: 0,
      completedAt: undefined,
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(12)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })

  it('should toggle completed todo to incomplete when handleToggle called', () => {
    var todoData = {
      id: 12,
      text: 'Test item',
      completed: true,
      createdAt: 1534714074,
      completedAt: 1534798855,
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
    todoApp.handleToggle(12)
    expect(todoApp.state.todos[0].completed).toBe(false)
    expect(todoApp.state.todos[0].completedAt).toNotExist()
  })
})

