export const IsValidBoolean = (value: boolean): boolean => {
    if(typeof(value) === 'boolean'){
        return true;
    } 
    return false;
}