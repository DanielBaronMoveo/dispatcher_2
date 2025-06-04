import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
} from '../src/utils/validation';

describe('validation utils', () => {
  test('validateEmail returns true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('validateEmail returns false for invalid email', () => {
    expect(validateEmail('bad-email')).toBe(false);
  });

  test('validatePassword requires letters and numbers', () => {
    expect(validatePassword('abc1234')).toBe(true);
    expect(validatePassword('abcdefg')).toBe(false);
  });

  test('validateRepeatPassword matches passwords', () => {
    expect(validateRepeatPassword('pass', 'pass')).toBe(true);
    expect(validateRepeatPassword('pass', 'diff')).toBe(false);
  });
});
