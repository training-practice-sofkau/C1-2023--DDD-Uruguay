import { Room } from './room.domain-entity';

describe('Room', () => {
  it('should be defined', () => {
    expect(new Room()).toBeDefined();
  });
});
