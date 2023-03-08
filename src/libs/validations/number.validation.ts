export const IsValidNumber = (value: number): boolean => {
    if(typeof(value) === 'number'){
        return true;
    } 
    return false;
}