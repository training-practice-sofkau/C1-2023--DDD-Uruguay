/**
 * It checks if the value is a string and returns true if it is, otherwise it returns false
 * @param {string} value - string - the value to be validated
 * @returns A function that takes a string and returns a boolean.
 */

export const isMangaName= (value:string): boolean => {

    const animeRegExp = /^[\w\d\s]+$/;
    const matches = value.match(animeRegExp)
    return matches !== null? true : false

}
