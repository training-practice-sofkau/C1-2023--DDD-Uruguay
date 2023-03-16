import { IsBoolean } from '.';

describe('IsBoolean', () => {
  it('should return true if the input is a boolean true value', () => {
    expect(IsBoolean(true)).toBe(true);
  });

  it('should return true if the input is a boolean false value', () => {
    expect(IsBoolean(false)).toBe(true);
  });
});
