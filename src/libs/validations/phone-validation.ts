
export const isphoneOk = (value: string ): boolean => {

    const regex = /^\[0-9]{12}$/;

    const dataTest = value as string;

    const matches = dataTest.match(regex);

    return matches != null ? true : false;

}
