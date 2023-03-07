export const IsUrl = (value: string): boolean => {

    const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
    const matches = value.match(regex)
    return matches != null ? true : false;
}