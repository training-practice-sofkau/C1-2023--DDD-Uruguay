import { DateValueObject } from './date.value-object';

describe('DateValueObject', () => {
  it('should be defined', () => {
    const validDate = new Date('2022-01-01');

    const dateValueObject = new DateValueObject(validDate);

    expect(dateValueObject).toBeTruthy();
    expect(dateValueObject.value).toEqual(validDate);
  });

  it('should return an error if the date value is after than now', () => {
    const invalidDate = new Date('2023-08-01');

    const dateValueObject = new DateValueObject(invalidDate);

    expect(dateValueObject).toBeTruthy();
    expect(dateValueObject.hasErrors()).toBeTruthy();
    expect(dateValueObject.getErrors()[0].field).toEqual('Date');
    expect(dateValueObject.getErrors()[0].message).toEqual('Date have to be older than Date now');
  })
});
