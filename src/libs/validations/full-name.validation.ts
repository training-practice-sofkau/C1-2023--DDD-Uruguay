export const IsValidFullName = (value: string): boolean => {

    const regex = /^([A-Z][a-z]+)( [A-Z][a-z]+)*$/g;

    const matches = value.match(regex);

    return matches != null ? true : false;
}