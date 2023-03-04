
export const IsEmail = (value: string): boolean => {

    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;

    const matches = value.match(regex);

    return matches != null ? true : false;

}