import Stream from '../../src/stream'
import { assert } from 'chai' 

describe('Integration Test', () => {

  describe('create stream with no parameters', () => {

    it('should return Stream object with defined tail', () => {
      let stream = new Stream()

      // Will want to change how this is returned so tail is not undefined
      assert.isUndefined(stream.head)
      assert.isUndefined(stream.tail)
    })

  })

  describe('create stream with parameters specified', () => {

    it('should return Stream with func property equal to new Stream object', () => {
      let stream = new Stream(1,2,3)

      assert.equal(stream.head,1)
      assert.isObject(stream.tail)
    })

  })

  it('should be able return values of nested Stream objects', () => {
    let stream = new Stream(1,2,3)

    assert.equal(stream.head,1)
    assert.equal(stream.tail.head,2)
    assert.deepEqual(stream.tail.tail.head,[3])

  })

})