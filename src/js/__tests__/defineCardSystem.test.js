import defineCardSystem from '../defineCardSystem';
import luhnValidate from '../luhnValidate';

test('should not define any card system or not pass luhn algorithm', () => {
  const result = defineCardSystem('111111111111111111', luhnValidate);
  expect(result).toBe(false);
});

describe('should pass luhn algorithm and show card system', () => {
  test('should define Mir card and return "Mir"', () => {
    const result = defineCardSystem(2200770212727079, luhnValidate);
    expect(result).toBe('Mir');
  });

  test('should define Mastercard card and return "Mastercard"', () => {
    const result = defineCardSystem('2221002461967171', luhnValidate);
    expect(result).toBe('Mastercard');
  });

  test('should define JCB card and return "JCB"', () => {
    const result = defineCardSystem('3535972965176629', luhnValidate);
    expect(result).toBe('JCB');
  });

  test('should define Diners Club card and return "Diners Club"', () => {
    const result = defineCardSystem('30202773623166', luhnValidate);
    expect(result).toBe('Diners Club');
  });

  test('should define right card and return "Diners Club"', () => {
    const result = defineCardSystem('3648 8718 773539', luhnValidate);
    expect(result).toBe('Diners Club');
  });

  test('should define American Express card and return "American Express"', () => {
    const result = defineCardSystem(379707775823951, luhnValidate);
    expect(result).toBe('American Express');
  });

  test('should define Visa card and return "Visa"', () => {
    const result = defineCardSystem(4556892340149723, luhnValidate);
    expect(result).toBe('Visa');
  });

  test('should define right card and return "Mastercard"', () => {
    const result = defineCardSystem('5488830778287599', luhnValidate);
    expect(result).toBe('Mastercard');
  });

  test('should define Discover card and return "Discover"', () => {
    const result = defineCardSystem('6011257267055585810', luhnValidate);
    expect(result).toBe('Discover');
  });
});
