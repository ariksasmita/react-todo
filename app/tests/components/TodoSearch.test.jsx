var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var TodoSearch = require('TodoSearch')

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should trigger onSearch when input changed', () => {
    var testVal = 'testing'
    var spy = expect.createSpy()
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy } />)

    todoSearch.refs.searchText.value = testVal
    TestUtils.Simulate.change(todoSearch.refs.searchText)
    expect(spy).toHaveBeenCalledWith(false, 'testing')
  })

  it('should trigger onSearch when checkbox changed', () => {
    var spy = expect.createSpy()
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={ spy } />)

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted)
    expect(spy).toHaveBeenCalledWith(true, '')
  })
})
