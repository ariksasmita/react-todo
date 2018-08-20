var React = require('react')
var expect = require('expect')

var TodoAPI = require('TodoAPI')

var todos = [{
  id: 1,
  text: 'test 1',
  completed: true,
},{
  id: 2,
  text: 'test 2',
  completed: false,
},{
  id: 3,
  text: 'some longer todo',
  completed: true,
}]

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('setTodos', () => {
    it('should set todos to local storage on valid data', () => {
      TodoAPI.setTodos(todos)
      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })
    it('should not set todos to local storage on invalid data', () => {
      TodoAPI.setTodos({a: 'b'})
      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('getTodos', () => {
    it('should return empty array on empty/invalid data', () => {
      var emptyTodos = TodoAPI.getTodos()
      expect(emptyTodos).toEqual([])
    })
    it('should return valid data when exist', () => {
      localStorage.setItem('todos', JSON.stringify(todos))
      var actualTodos = TodoAPI.getTodos()
      expect(actualTodos).toEqual(todos)
    })
  })

  describe('filterTodos', () => {
    it('should return all items if showCompleted true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })
    it('should return only uncompleted items if showCompleted false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '')
      expect(filteredTodos.length).toBe(1)
    })
    it('should sort todos based on completed status, uncompleted wil come first', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos[0].completed).toBe(false)
    })
    it('should return all todos based on empty search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })
    it('should return todos based on valid search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some')
      expect(filteredTodos.length).toBe(1)
    })
    it('should not return todos based on invalid search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'dog')
      expect(filteredTodos.length).toBe(0)
    })
  })
})
