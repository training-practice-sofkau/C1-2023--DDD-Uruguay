export const IsValidDocument = (value: number): boolean => {

    const regex = /^\d{8}$/;

    const matches = value.toString().match(regex);

    return matches != null ? true : false;
}