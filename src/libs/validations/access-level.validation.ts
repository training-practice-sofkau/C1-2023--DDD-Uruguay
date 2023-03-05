export const IsValidAccessLevel = (value: string): boolean => {

    const regex = /^(Level1|Level2|Level3)$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;
}