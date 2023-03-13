import { IdValueObject } from './id.value-object';

describe('IdValueObject', () => {
  it('should OK', () => {
    const validUuid = '4821298e-811a-42fd-8c70-4df01e35ff63';

    const idValueObject = new IdValueObject(validUuid);

    expect(idValueObject).toBeTruthy();
    expect(idValueObject.value).toEqual(validUuid);
  });

  it('should return is not correct length', () => {
    const invalidUuid = '4821298e-811a-42fd-8c70-4df01e';

    const idValueObject = new IdValueObject(invalidUuid);

    expect(idValueObject).toBeTruthy();
    expect(idValueObject.hasErrors).toBeTruthy();
    expect(idValueObject.getErrors()[0].field).toEqual('ID')
    expect(idValueObject.getErrors()[0].message).toEqual('Is not a correct UUID length')
  });

  it('should return is not an UUID', () => {
    const invalidUuid = '4821298e-811a-42fd-8c70-4dZ01e35ff63';

    const idValueObject = new IdValueObject(invalidUuid);

    expect(idValueObject).toBeTruthy();
    expect(idValueObject.hasErrors).toBeTruthy();
    expect(idValueObject.getErrors()[0].field).toEqual('ID')
    expect(idValueObject.getErrors()[0].message).toEqual('Is not an UUID')
  });
});
