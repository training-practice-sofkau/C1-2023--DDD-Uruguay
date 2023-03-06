
export const IsPhoneNumber = (value: string): boolean => {

    const regex = /^\[0-9]{12}$/;

    const matches = value.match(regex);

    return matches != null ? true : false;

}