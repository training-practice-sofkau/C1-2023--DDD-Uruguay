import { IsEmpty } from '.';

describe('IsEmpty function', () => {
  it('returns true for empty string', () => {
    expect(IsEmpty('')).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(IsEmpty('abc')).toBe(false);
  });

  it('returns true for null', () => {
    expect(IsEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(IsEmpty(undefined)).toBe(true);
  });

  it('returns true for empty object', () => {
    expect(IsEmpty({})).toBe(true);
  });

  it('returns false for non-empty object', () => {
    expect(IsEmpty({ a: 1 })).toBe(false);
  });

  it('returns false for boolean true', () => {
    expect(IsEmpty(true)).toBe(false);
  });

  it('returns false for boolean false', () => {
    expect(IsEmpty(false)).toBe(false);
  });

  it('returns false for non-empty array', () => {
    expect(IsEmpty([1, 2, 3])).toBe(false);
  });

  it('returns true for empty array', () => {
    expect(IsEmpty([])).toBe(true);
  });

  it('returns false for non-empty number', () => {
    expect(IsEmpty(42)).toBe(false);
  });

  it('returns false for non-empty bigint', () => {
    expect(IsEmpty(BigInt(42))).toBe(false);
  });
});
