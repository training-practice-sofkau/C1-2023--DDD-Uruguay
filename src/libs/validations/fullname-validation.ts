
export const isFullNameOK = (value : string): boolean =>{

const dataTest = value;

  // Verifico que haya un espacio en el nombre y el apellido
  if (!/\s/.test(dataTest)) {
    return false;
  }

  // Verifico que cada palabra del nombre completo comience con mayúscula
  const nameParts = dataTest.split(' ');

  const isValidNameParts = nameParts.every((part) => /^[A-Z][a-z]*$/.test(part));
  
  if (!isValidNameParts) {
    return false;
  }

  return true;
};
 
 