
export const IsUUID = (value: string): boolean => {

    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;

}