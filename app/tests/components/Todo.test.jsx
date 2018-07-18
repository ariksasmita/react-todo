var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Todo = require('Todo')

describe('Todo', () => {
  it("should exist", () => {
    expect(Todo).toExist()
  })

  it('should call onToggleItem', () => {
    var todoData = {
      id: 12,
      text: 'Test Item',
      completed: true,
    }
    var spy = expect.createSpy()
    var todo = TestUtils.renderIntoDocument(<Todo onToggle={ spy } { ...todoData }/>)
    var $el = $(ReactDOM.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith(12)
  })
})

