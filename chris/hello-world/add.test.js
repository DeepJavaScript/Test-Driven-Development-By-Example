import { it, assert, describe, expect } from 'vitest'
import add from './add'

describe('hello world', () => {
  it('2+1=3', (ctx) => {
    // prints name of the test
    assert.equal(add(2, 1),3)
    // expect(add(2, 1)).toBe(3)
  })
})
