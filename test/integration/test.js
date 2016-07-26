import Streazy from '../../src/streazy'
import { assert } from 'chai' 

describe.only('Integration Test', () => {

  it('create stream with wrapper if no parameters specified', () => {
    let stream = new Streazy()

    assert.isUndefined(stream.head)
    assert.isObject(stream.tail)
    assert.isNull(stream.tail.value)
    assert.isFunction(stream.tail.func)
  })

  it('create stream with wrapper, with func property equal to new Streazy object, if parameters specified', () => {
    let stream = new Streazy(1,2,3)

    assert.equal(stream.head,1)
    assert.isObject(stream.tail)
    assert.isNull(stream.tail.value)
    assert.isObject(stream.tail.func)
  })

})