export const IsValidEmail = (value: string): boolean => {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const matches = value.match(regex);

    return matches != null ? true : false;
}