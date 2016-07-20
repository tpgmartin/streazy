import Streazy from '../src/streazy'
import { assert } from 'chai' 

describe('Streazy', () => {

  it('create Stream with function if no parameters specified', () => {
    let stream = new Streazy()

    assert.isFunction(stream.tail)
  })

  it('create Stream with head if specified', () => {
    let stream = new Streazy(1)

    assert.equal(stream.head, 1)
  })

  it.only('create Stream with head and tail if specified', () => {
    let stream = new Streazy(1,2)
    
    assert.equal(stream.head, 1)
    assert.isObject(stream.tail)
    assert.equal(stream.tail.head, 2)
  })

})