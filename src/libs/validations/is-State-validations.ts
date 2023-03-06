/**
 * It checks if the value is one of the three options in the regexp
 * @param {string} value - the value of the cell
 * @returns A function that takes a string and returns a boolean.
 */
export const isState= (value:string): boolean => {

    const StateRegExp = /^(Finalizado|En emision|cancelado|en espera)$/
    const matches = value.match(StateRegExp)
    return matches !== null? true : false
    
}
