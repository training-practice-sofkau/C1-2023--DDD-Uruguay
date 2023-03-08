
export const IsEmailOk = (value: string ): boolean => {

    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;

    const dataTesting = value;

    const matches = dataTesting.match(regex);

    return matches != null ? true : false;

}