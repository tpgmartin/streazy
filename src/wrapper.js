export default class Wrapper {

  constructor (func=null) {
    this.func = _addFuncProperty(func)
    this.executed = false
    this.value = null
  }
    

}

Wrapper.prototype.eval = function () {
  if (this.executed) return this.value

  this.value = this.func()
  this.executed = true
  return this.value 
}

function _addFuncProperty(func) {

  // if (!func) func = function () { }
  return function () { return func }

}