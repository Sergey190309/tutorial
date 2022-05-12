import method, { method2, method3 } from './utils'

jest.mock('./utils.js', () => ({
  __esModule: true,
  ...jest.requireActual('./utils.js'),
  default: jest.fn(() => 'You have called a mocked default method'),
  method3: jest.fn(() => 'You have called a mocked method 3'),
}))

describe('mocked files', () => {
  test('method2', () => {
    expect(method2()).toBe('You have called Method 2')
  })

  test('method3', () => {
    expect(method3()).toBe('You have called a mocked method 3')
    expect(method3).toHaveBeenCalledTimes(1)
  })

  test('default export', () => {
    const result = method()
    expect(result).toBe('You have called a mocked default method');
    expect(method).toHaveBeenCalledTimes(1);
  });

})