export const IsValidPhone = (value: string): boolean => {

    const regex = /^(\+\d{2})?\d{9}$/;

    const matches = value.match(regex);

    return matches != null ? true : false;
}