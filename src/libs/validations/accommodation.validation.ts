export const IsValidAccommodation = (value: string): boolean => {

    const regex = /^(Basica|Lujo|VIP)$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;
}