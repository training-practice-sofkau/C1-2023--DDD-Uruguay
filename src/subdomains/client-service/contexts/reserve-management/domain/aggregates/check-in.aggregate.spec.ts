import { CheckIn } from './check-in.aggregate';

describe('CheckIn', () => {
  it('should be defined', () => {
    expect(new CheckIn()).toBeDefined();
  });
});
