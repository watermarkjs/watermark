import { add, minus } from '..'

describe('shared utils', () => {
  test('add(1, 2) ', async () => {
    expect(add(1, 2)).toBe(3)
  })

  test('minus(1, 2)', async () => {
    expect(minus(1, 2)).toBe(-1)
  })
})
