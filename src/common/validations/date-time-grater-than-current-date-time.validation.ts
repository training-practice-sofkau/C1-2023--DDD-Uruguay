export const IsDateTimeGraterThanCurrentDateTime = (value: number): boolean => {
  const now = Date.now();
  const result = value > now ? true : false;
  return result;
};
