import luhnValidate from '../luhnValidate';

test('should return false if empty input', () => {
  const result = luhnValidate('');

  expect(result).toBe(false);
});

test('should return true passing luhn algorithm (with spaces)', () => {
  const result = luhnValidate(' 3530 1113 3330    0000');

  expect(result).toBe(true);
});

test('should return true passing luhn algorithm (without spaces)', () => {
  const result = luhnValidate(371449635398431);

  expect(result).toBe(true);
});

test('should return false passing luhn algorithm', () => {
  const result = luhnValidate(3714496753984315);

  expect(result).toBe(false);
});
