var React = require('react')
var expect = require('expect')

var TodoAPI = require('TodoAPI')

var todos = [{
  id: 1,
  text: 'test 1',
  completed: false,
},{
  id: 2,
  text: 'test 2',
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
})
