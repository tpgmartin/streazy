import Wrapper from './wrapper'

export default class Stream {

  constructor (head, ...tail) {
    this.head = head
    // ensure input tail array private
    let _tail = _createTail(tail)
    this.tail = _getTail(_tail)
  }

  append (stream) {
    // append non stream? how to handle this?
    if (typeof this.tail === 'function') {
      return this.tail = stream
    }

    return this.tail.append(stream)
  }

  prepend (stream) {
    return new Stream(stream.head,this)
  }

  // move this to private method
  empty () {
    return typeof this.head === 'undefined'
  }

}

function _createTail (tail) {

  if (!tail.length || (tail[0] instanceof Array && !tail[0].length)) {
    return new Wrapper()
  }

  return new Wrapper(new Stream(tail[0],tail.splice(1)))

}

function _getTail (tail) {
  return tail.eval()
}