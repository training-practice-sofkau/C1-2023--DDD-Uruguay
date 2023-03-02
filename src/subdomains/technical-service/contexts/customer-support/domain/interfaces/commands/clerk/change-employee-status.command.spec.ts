import { ChangeEmployeeStatusCommand } from './change-employee-status.command';

describe('ChangeEmployeeStatusCommand', () => {
  it('should be defined', () => {
    expect(new ChangeEmployeeStatusCommand()).toBeDefined();
  });
});
