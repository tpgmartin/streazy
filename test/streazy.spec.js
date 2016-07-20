import Streazy from '../src/streazy'
import { assert } from 'chai' 

describe('Streazy', function() {

  it('create Stream with function if no parameters specified', function() {
    let stream = new Streazy()
    console.log(stream)
    assert.isFunction(stream.tail)
  });

  it('create Stream with head if specified', function() {
    let stream = new Streazy(1)

    assert.equal(stream.head, 1)
  });

 it('create Stream with head and tail if specified', function() {
    let stream = new Streazy(1,2)

    console.log(stream)

    assert.equal(stream.head, 1)
    assert.isFunction(stream.tail)
    assert.equal(stream.tail.head, 2)
  });

});