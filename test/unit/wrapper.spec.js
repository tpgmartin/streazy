import Wrapper from '../../src/wrapper'
import { assert } from 'chai' 

describe('Wrapper', () => {

  it('create Wrapper if no parameters specified', () => {
    let wrapper = new Wrapper()

    assert.isObject(wrapper)
    assert.isFunction(wrapper.func)
  })

  it('create Wrapper with func property, if func supplied', () => {
    let func = function example () {}
    let wrapper = new Wrapper(func)

    assert.isObject(wrapper)
    assert.isFunction(wrapper.func)
    assert.equal(wrapper.func, func)
  })

})