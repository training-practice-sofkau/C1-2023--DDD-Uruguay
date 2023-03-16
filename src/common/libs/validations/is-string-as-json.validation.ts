export const IsStringAsJSON = (value: string): boolean => {
  try {
    const json = JSON.parse(value);
    return typeof json === 'object' ? true : false;
  } catch (error) {
    return false;
  }
};
