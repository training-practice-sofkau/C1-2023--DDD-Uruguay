export const IsValidLocation = (value: string): boolean => {

    const regex = /^(Piso1|Piso2|Piso3|Piso4|Piso5)$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;
}