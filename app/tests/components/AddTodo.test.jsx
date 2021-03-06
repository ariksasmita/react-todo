var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call onAddTodo prop with valid data', () => {
    var testVal = 'test task'
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy } />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = testVal
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(testVal)
  })

  it('should not call onAddTodo prop with invalid data', () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy } />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = ''
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
