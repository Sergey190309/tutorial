import * as math from './math'
import * as doMath from './doMath'

const a = 11, b = 12
const sum = a + b

math.add = jest.fn(() => sum)
// math.subtract = jest.fn()

describe('studing', () => {
  test('calling math add using mock', () => {
    doMath.doAdd(a, b)
    // console.log('math.doAdd calls ->', math.add.mock.calls)
    // console.log('math.doAdd results ->', math.add.mock.results)
  })
  test('using spyOn', () => {
    const addMock = jest.spyOn(math, 'add')
    doMath.doAdd(a, b)
    // console.log('math.doAdd calls ->', addMock.mock.calls)
    // console.log('math.doAdd results ->', addMock.mock.results)
  });
})
