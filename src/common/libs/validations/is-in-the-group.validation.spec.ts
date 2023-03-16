import { IsInTheGroup } from '.';

describe('IsInTheGroup', () => {
  it('should return true if the value is in the group', () => {
    const object = { key: 'value' };
    const group = [1, 2, 3, 'hello', object];
    expect(IsInTheGroup(1, group)).toBe(true);
    expect(IsInTheGroup('hello', group)).toBe(true);
    expect(IsInTheGroup(object, group)).toBe(true);
    expect(IsInTheGroup({ key: 'value' }, group)).toBe(false);
  });

  it('should return false if the value is not in the group', () => {
    const group = [1, 2, 3, 'hello', { key: 'value' }];
    expect(IsInTheGroup(4, group)).toBe(false);
    expect(IsInTheGroup('world', group)).toBe(false);
    expect(IsInTheGroup({ key: 'otherValue' }, group)).toBe(false);
  });
});
