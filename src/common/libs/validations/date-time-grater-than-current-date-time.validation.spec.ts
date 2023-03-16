import { IsDateTimeGraterThanCurrentDateTime } from '.';

describe('IsDateTimeGraterThanCurrentDateTime', () => {
  it('should return true if the input is greater than the current date time', () => {
    const futureDateTime = Date.now() + 1000000;
    expect(IsDateTimeGraterThanCurrentDateTime(futureDateTime)).toBe(true);
  });

  it('should return false if the input is equal to the current date time', () => {
    const currentDateTime = Date.now();
    expect(IsDateTimeGraterThanCurrentDateTime(currentDateTime)).toBe(false);
  });

  it('should return false if the input is less than the current date time', () => {
    const pastDateTime = Date.now() - 1000000;
    expect(IsDateTimeGraterThanCurrentDateTime(pastDateTime)).toBe(false);
  });
});
