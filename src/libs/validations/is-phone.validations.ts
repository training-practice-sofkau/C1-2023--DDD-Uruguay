export const IsPhone = (value: number): boolean => {

    const regex = /^\d{9}$/
    const matches = value.toString().match(regex)
    return matches != null ? true : false;
}