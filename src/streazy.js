export default class Streazy {

  constructor (head, ...tail) {
    this.head = head
    this.tail = _createTail(tail)
  }

  append (stream) {
    return this.tail = stream
  }

  empty () {
    return typeof this.head === 'undefined'
  }

}

function _createTail (tail) {

  if (!tail.length || (tail[0] instanceof Array && !tail[0].length)) return function () {}

  return new Streazy(tail[0],tail.splice(1))

}