import Streazy from '../../src/streazy'
import { assert } from 'chai' 

describe.only('Integration Test', () => {

  describe('create stream with no parametes', () => {

    it('should return Streazy object with defined tail', () => {
      let stream = new Streazy()

      assert.isUndefined(stream.head)
      assert.isObject(stream.tail)
      assert.isNull(stream.tail.value)
      assert.isFunction(stream.tail.func)
    })

  })

  describe('create stream with parameters specified', () => {

    it('should return Streazy with func property equal to new Streazy object', () => {
      let stream = new Streazy(1,2,3)

      assert.equal(stream.head,1)
      assert.isObject(stream.tail)
      assert.isNull(stream.tail.value)
      assert.isFunction(stream.tail.func)
    })

  })

  it('should be able return values of nested Streazy objects', () => {
    let stream = new Streazy(1,2,3)

    assert.equal(stream.head,1)
    assert.equal(stream.getTail().head,2)
    assert.deepEqual(stream.getTail().getTail().head,[3])

  })

})