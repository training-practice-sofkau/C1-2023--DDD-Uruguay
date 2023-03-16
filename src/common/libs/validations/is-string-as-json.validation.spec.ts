import { IsStringAsJSON } from '.';

describe('IsStringAsJSON function', () => {
  it('returns true for valid JSON string', () => {
    expect(
      IsStringAsJSON('{"name": "John", "age": 30, "city": "New York"}'),
    ).toBe(true);
  });

  it('returns false for invalid JSON string', () => {
    expect(
      IsStringAsJSON('{"name": "John", "age": 30, "city": "New York"'),
    ).toBe(false);
  });

  it('returns false for non-JSON string', () => {
    expect(IsStringAsJSON('This is not a JSON string.')).toBe(false);
  });

  it('returns true for empty JSON object', () => {
    expect(IsStringAsJSON('{}')).toBe(true);
  });

  it('returns true for JSON array', () => {
    expect(IsStringAsJSON('[1, 2, 3]')).toBe(true);
  });

  it('returns true for JSON null value', () => {
    expect(IsStringAsJSON('null')).toBe(true);
  });

  it('returns false for JSON boolean value', () => {
    expect(IsStringAsJSON('true')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(IsStringAsJSON('123')).toBe(false);
  });
});
