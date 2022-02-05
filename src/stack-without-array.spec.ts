import { Stack } from './stack-without-array'

describe('stack without array', () => {
  it('is created empty', () => {
    const stack = new Stack()
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  });

  it('can push to the top', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.top).toBe(0)
    expect(stack.items).toEqual({0: 1})
  });

  it('can pop off', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    const popValue = stack.pop()
    expect(popValue).toBe(3)
    expect(stack.top).toBe(1)
    expect(stack.items).toEqual({0: 1, 1: 2})
  })
})