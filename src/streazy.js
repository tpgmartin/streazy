export default class Streazy {

  constructor (head, ...tail) {
    this.head = head
    this.tail = _createTail(tail)
  }

  append (stream) {
    // append non stream? how to handle this?
    if (typeof this.tail === 'function') {
      return this.tail = stream
    }

    return this.tail.append(stream)
  }

  prepend (stream) {
    return new Streazy(stream.head,this)
  }

  // move this to private method
  empty () {
    return typeof this.head === 'undefined'
  }

}

function _createTail (tail) {

  if (!tail.length || (tail[0] instanceof Array && !tail[0].length)) return function () {}

  return new Streazy(tail[0],tail.splice(1))

}