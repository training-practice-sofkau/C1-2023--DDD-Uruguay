import { ChangeEmployeeStatusEventPublisher } from './change-employee-status.event-publisher';

describe('ChangeEmployeeStatusEventPublisher', () => {
  it('should be defined', () => {
    expect(new ChangeEmployeeStatusEventPublisher()).toBeDefined();
  });
});
