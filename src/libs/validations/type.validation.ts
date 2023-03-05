export const IsValidType = (value: string): boolean => {

    const regex = /^(Simple|Doble)$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;
}