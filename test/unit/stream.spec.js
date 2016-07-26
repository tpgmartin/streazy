import Stream from '../../src/stream'
import { assert } from 'chai' 

describe('Stream', () => {

  describe.skip('append to end of stream', () => {

    it('should add operand as tail of target stream', () => {
      let stream = new Stream(1,2,3)
      let stream_to_add = new Stream(4)

      stream.append(stream_to_add)
      let new_tail = stream.tail.tail.tail

      assert.equal(new_tail.head, 4)
      assert.isFunction(new_tail.tail)
    })

  })

  describe('prepend to head of stream', () => {

    it('should add operand as tail of target stream', () => {
      let stream = new Stream(2,3,4)
      let stream_to_add = new Stream(1)

      let new_stream = stream.prepend(stream_to_add)

      assert.equal(new_stream.head, 1)
      assert.isObject(new_stream.tail)
    })

  })


  describe('check if empty', () => {

    it('true if "head" undefined', () => {
      let stream = new Stream()

      assert.equal(stream.empty(), true)
    })

    it('false otherwise', () => {
      let stream = new Stream(1,2,3,4)

      assert.equal(stream.empty(), false)
    })

  })

})